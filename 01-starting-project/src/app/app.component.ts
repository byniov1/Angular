import { Component } from '@angular/core';
import { HeaderComponents } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dumy_user';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponents, UserComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected users = DUMMY_USERS;
}
