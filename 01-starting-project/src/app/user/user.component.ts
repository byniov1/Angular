import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { DUMMY_USERS } from '../dumy_user';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  avatar: string;
  name: string;
  id: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  /* get imagePath() {
    // return `assets/users/` + this.selectedUser.avatar;
    // return `assets/users/` + this.selectedUser().avatar;
  } */
  // protected imagePath = computed(
  //   () => `assets/users/` + this.selectedUser().avatar
  // );
  // onSelectUser() {
  //   randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  /* - - - - - - - - - - - - - - - - - -
  // signal as Inputs()
  public avatar = input.required<string>();

  public name = input<string>('');

  protected imagePath = computed(() => `assets/users/` + this.avatar());
 - - - - - - - - - - - - - - - - - - */

  /* - - - - - - - - - - - - - - - - - -  
 // Classic input
 - - - - - - - - - - - - - - - - - - */
  // @Input({ required: true }) avatar: string | undefined = '';

  // @Input({ required: true }) name: string | undefined = '';

  // @Input({ required: true }) id: string | undefined = '';

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return `assets/users/` + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
