import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { PupilComponent } from './pupil/pupil.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    PupilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
