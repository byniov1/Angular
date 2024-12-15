import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks, NewTaskData } from './tasks.model';
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { CardComponent } from "../common/card/card.component";

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

  onCancelAddTask(){
    this.showAddTaskForm = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })

    this.showAddTaskForm = false;
  }
} 
