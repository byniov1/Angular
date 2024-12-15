import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskData } from './tasks.model';
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { CardComponent } from "../common/card/card.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent, NewTasksComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string

  @Input() name?: string | undefined;

  // private taskService = inject(TaskService);

  protected showAddTaskForm?: boolean = false;

  protected tasks;

  constructor(private taskService: TaskService){
    this.tasks = this.taskService.tasks
  }

  get selectedUserTasks(){  
    return this.taskService.getUserTask(this.userId);
  }

  onCompleteSelected(id: string){
    this.taskService.onRemoveTask(id)
  }

  onAddTask(taskData: NewTaskData){
    this.taskService.onAddTask(taskData, this.userId);

    this.showAddTaskForm = false;
  }

  onStartAddTask() {
    this.showAddTaskForm = !this.showAddTaskForm;
  }

  onCancelAddTask(){
    this.showAddTaskForm = false;
  }
} 
