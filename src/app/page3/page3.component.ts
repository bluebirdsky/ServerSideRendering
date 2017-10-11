import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title = 'page 3';

  constructor(private metaService: Meta) {}

  ngOnInit() {
//    this.metaService.updateTag({
//      property: 'og:url',
//      content: 'https://test.com/'
//    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'title page 3'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Description page 3'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg'
    });
  }
}
