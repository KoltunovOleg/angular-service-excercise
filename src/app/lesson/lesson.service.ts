import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private $lessonAnnouncementSource = new Subject<string>();
  private $lessonConfirmedSource = new Subject<string>();

  $lessonAnnouncements = this.$lessonAnnouncementSource.asObservable();
  $lessonConfirmed = this.$lessonConfirmedSource.asObservable();

  constructor() { }

  public announceLesson(lesson: string) {
    this.$lessonAnnouncementSource.next(lesson);
  }

  public confirmLesson(lesson: string) {
    this.$lessonConfirmedSource.next(lesson);
  }
}
