import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bootstrap-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css'],
})
export class LikeBtnComponent {
  @Input('isLiked') isLiked: boolean = false;
  @Input('likesCount') likesCount: number = 0;
  @Output() change = new EventEmitter();

  onClick() {
    this.change.emit();
  }
}
