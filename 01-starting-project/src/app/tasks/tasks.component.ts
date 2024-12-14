import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string

  @Input() name?: string | undefined;

  protected tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId == this.userId)
  }

  onStartAddTask() {}
} 
