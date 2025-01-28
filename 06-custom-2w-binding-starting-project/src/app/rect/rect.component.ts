import { Component, input, model, output } from '@angular/core';
import { signalUpdateFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // Old way
  // size = input.required<{ width: string; height: string }>();
  // sizeChange = output<{ width: string; height: string }>();

  // onReset() {
  //   this.sizeChange.emit({
  //     width: '200',
  //     height: '100',
  //   });
  // }

  //  New Way
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
