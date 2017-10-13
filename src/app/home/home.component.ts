import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'WEALTH OF INFORMATION';

  constructor(private metaService: Meta) {}

  ngOnInit() {
   this.metaService.updateTag({
     property: 'og:url',
     content: 'https://angular-universal-demo-test.herokuapp.com/'
   });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'WEALTH OF INFORMATION'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Measurement—its the first step that leads to improvement. The world of machines and devices has taken a giant leap thanks to tiny sensors, internet connectivity and massive data storage.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/data-thumb-image.jpg'
    });
  }
}
