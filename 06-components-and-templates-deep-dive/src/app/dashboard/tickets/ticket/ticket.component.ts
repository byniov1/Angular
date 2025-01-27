import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // public data = input.required<Ticket>();
  public data = input<Ticket | null>(null, {
    alias: 'ticket',
    // transform: () => {},
  });

  public detailsVisible = signal(false);

  public close = output();

  onToggleDetail() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
