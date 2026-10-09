import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Rift Mayhem');
  protected readonly count = signal(0);
  protected readonly clicks = signal<string[]>([]);

  protected increment(): void {
    const next = this.count() + 1;
    this.count.set(next);
    const now = new Date().toLocaleTimeString();
    this.clicks.update((history) => [`Clic #${next} enregistré à ${now}`, ...history.slice(0, 4)]);
  }

  protected reset(): void {
    this.count.set(0);
    this.clicks.set([]);
  }
}
