import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasks.model';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  
  @Output() addNewTask = new EventEmitter<NewTaskData>();

  protected newTask = signal<NewTaskData>({
    title: '',
    summary: '',
    date: '',
  })

  // protected newTask = {
  //   title: '',
  //   summary: '',
  //   date: '',
  // }
  
  onCancelClicked(){
    this.cancelClicked.emit()
  }

  onSubmit() {
    this.addNewTask.emit(this.newTask())
  }
}
