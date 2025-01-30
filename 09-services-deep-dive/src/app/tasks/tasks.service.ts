import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LogginService } from '../loggin.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  public allTasks = this.tasks.asReadonly();

  private logginService = inject(LogginService);

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.logginService.log('ADDED TASK with title ' + taskData.title);
  }

  // updateTasksStatus(taskId: string, newStatus: TaskStatus) {
  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task: Task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task;
      })
    );

    this.logginService.log('CHANGE TASK STATUS to ' + newStatus);
  }
}
