import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

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

  // onSubmit(titleElement: string, textElement: string, form: HTMLFormElement){
  onSubmit(titleElement: string, textElement: string) {
    console.dir(titleElement, textElement);

    this.form()?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }
}
