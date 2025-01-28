import {
  Directive,
  effect,
  EffectCleanupRegisterFn,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from '../auth/auth.model';
import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  public userType = input.required<Permission>({
    alias: 'appAuth',
  });

  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef);

  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect((onCleanup: EffectCleanupRegisterFn) => {
      if (this.authService.activePermission() === this.userType()) {
        // console.log('SHOW ELEMET');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // console.log('DO NOT SOW ELEMENT');
        this.viewContainerRef.clear();
      }

      onCleanup(() => {
        return;
      });
    });
  }
}
