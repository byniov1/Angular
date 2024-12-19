import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/task.module";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, UserComponent, HeaderComponent],
    imports: [BrowserModule, SharedModule, TaskModule],
})

export class AppModule{}