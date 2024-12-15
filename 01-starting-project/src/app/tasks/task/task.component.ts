import { Component, inject, Input } from '@angular/core';
import { Task } from '../tasks.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css' 
})

export class TaskComponent {
  @Input() task!: Task;

  private taskService = inject(TaskService);

  onCompleteClick(){
    this.taskService.onRemoveTask(this.task.id);
  }

}
