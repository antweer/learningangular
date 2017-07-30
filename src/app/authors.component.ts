import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors', // CSS Selector chosen here
  template: `
    <h2>{{ authors.length }} Authors</h2>
    <ul>
      <li *ngFor='let author of authors'>
        {{ author }}
      </li>
    </ul>
    ` // HTML markup we want rendered for this component - add JS with {{}} - has databinding so whenever JS updated, DOM updates
})

export class AuthorsComponent {
  title = 'List of Authors';
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
