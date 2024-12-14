import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './tasks.model';
import { NewTasksComponent } from "./new-tasks/new-tasks.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string

  @Input() name?: string | undefined;

  protected showAddTaskForm?: boolean = false;

  protected tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId == this.userId)
  }

  onCompleteSelected(id: string){
    // ...
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(id);
  }

  onStartAddTask() {
    this.showAddTaskForm = !this.showAddTaskForm;
  }
} 
