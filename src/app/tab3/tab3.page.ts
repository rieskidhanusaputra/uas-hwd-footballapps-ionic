import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  fav: any = {}; // Initialize fav as an empty object initially

  constructor() {}

  ngOnInit() {
    // Retrieve fav data from localStorage when the component initializes
    const favData = localStorage.getItem('fav');
    if (favData) {
      this.fav = JSON.parse(favData);
      console.log('Retrieved fav data:', this.fav);
    } else {
      console.warn('No favorite data found in localStorage.');
    }
  }
}
