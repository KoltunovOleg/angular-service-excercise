import { Component, Input, OnInit } from '@angular/core';
import { LessonService } from '../lesson/lesson.service';

@Component({
  selector: 'app-pupil',
  templateUrl: './pupil.component.html',
  styleUrls: ['./pupil.component.css']
})
export class PupilComponent implements OnInit {

  @Input() name: string;

  private lesson = '';

  constructor(private lessonService: LessonService) {
    this.lessonService.$lessonAnnouncements.pipe().subscribe(
      lesson => {
        this.lesson = lesson;
      }
    );
  }

  public confirm() {
    this.lessonService.confirmLesson(this.name);
  }

  ngOnInit() {
  }

}
