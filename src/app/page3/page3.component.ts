import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title = 'PRESCRIPTION FOR SUCCESS';

  constructor(private metaService: Meta) {}

  ngOnInit() {

    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://angular-universal-demo-test.herokuapp.com/page2/hi'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'PRESCRIPTION FOR SUCCESS'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'The pharmaceutical division of a leading health care provider wanted to roll out a mobile app that was built around positive user experience, performed at lightning speed and had a high degree of reliability.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/healthcare-thumb-2.jpg'
    });
  }
}
