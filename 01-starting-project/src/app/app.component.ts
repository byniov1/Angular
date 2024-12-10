import { Component } from '@angular/core';
import { HeaderComponents } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dumy_user';
import { CommonModule, NgFor } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponents, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected users = DUMMY_USERS;
  protected selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onUserReceived(id: string) {
    this.selectedUserId = id;
  }
}
