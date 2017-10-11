import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  title = 'page 2!';

  constructor(private metaService: Meta) {}

  ngOnInit() {
//    this.metaService.updateTag({
//      property: 'og:url',
//      content: 'https://test.com/'
//    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'title page 2'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Description page 2'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg'
    });
  }
}
