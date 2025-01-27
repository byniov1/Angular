import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  // onSubmit(titleElement: string, textElement: string, form: HTMLFormElement){
  onSubmit(titleElement: string, textElement: string) {
    console.dir(titleElement, textElement);

    this.add.emit({ title: titleElement, text: textElement });
    this.form()?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }
}
