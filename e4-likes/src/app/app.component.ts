import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e4-likes';

  tweet = {
    body: 'here is a tweet .. ',
    isLiked: false,
    likesCount: 3,
  };
  onLikeChange() {
    this.tweet.likesCount += this.tweet.isLiked ? -1 : 1;
    this.tweet.isLiked = !this.tweet.isLiked;
  }
}
