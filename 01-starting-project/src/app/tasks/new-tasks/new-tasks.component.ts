import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasks.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Input({required: true}) userId!: string;

  @Output() cancelClicked = new EventEmitter<void>();
  
  @Output() addNewTask = new EventEmitter<NewTaskData>();

  protected newTask = signal<NewTaskData>({
    title: '',
    summary: '',
    date: '',
  })

  private taskService = inject(TaskService);
  
  onCancelClicked(){
    this.cancelClicked.emit()
  }

  onSubmit() {
    this.taskService.onAddTask(this.newTask(), this.userId);
  }
}
