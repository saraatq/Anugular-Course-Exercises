import { Component } from '@angular/core';

@Component({
  selector: 'app-fav-icon',
  templateUrl: './fav-icon.component.html',
  styleUrls: ['./fav-icon.component.css']
})
export class FavIconComponent {
  isfav = false;
  change() {
    this.isfav = !this.isfav;
    }

}
