import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses', // CSS Selector chosen here
  template: `
    <button class="btn btn-primary">Save</button>
    ` // HTML markup we want rendered for this component - add JS with {{}} - has databinding so whenever JS updated, DOM updates
})

export class CoursesComponent {
  title = 'List of Courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
