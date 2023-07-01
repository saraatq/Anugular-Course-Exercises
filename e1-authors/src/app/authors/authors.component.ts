import { Component, NgModule} from '@angular/core';
import { GetAuthorsService } from '../get-authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {

  authors;

  constructor(service: GetAuthorsService){
    this.authors = service.getAuthors();
  }

}
