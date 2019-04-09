import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson/lesson.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  history: string[] = [];
  pupils = ['John', 'Alice', 'Bob', 'Karl'];
  lessons = ['NG1', 'NG2', 'NG7', 'NG8'];
  private nextLesson = 0;

  constructor(private lessonService: LessonService) {
    this.lessonService.$lessonConfirmed.pipe().subscribe(
      pupil => {
        this.history.push(`${pupil} is going to learn it`);
      }
    );
  }

  announce() {
    if (this.nextLesson < this.lessons.length) {
      const lesson = this.lessons[this.nextLesson++];
      this.lessonService.announceLesson(lesson);
      this.history.push(`Lesson announced: ${lesson}`);
    } else {
      this.history.push('Lessons finished :(');
    }
  }

  ngOnInit() {
  }

}
