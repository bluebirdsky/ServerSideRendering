import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  title = 'A CASH CROP YOU CAN BET THE FARM ON';

  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://angular-universal-demo-test.herokuapp.com/page2/'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'A CASH CROP YOU CAN BET THE FARM ON'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Do you know how many seeds are in that field over there? We do. We even know the precise angle they should be planted in the ground to yield an optimal crop.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/agriculture-thumb-5.jpg'
    });
  }
}


