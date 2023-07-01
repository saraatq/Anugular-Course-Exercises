import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorsService {

  private authors = ['author1', 'author2', 'author3'];

  getAuthors(){
    return this.authors;
  }


}
