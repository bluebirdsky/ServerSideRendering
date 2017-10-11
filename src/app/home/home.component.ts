import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works!';

  constructor(private metaService: Meta) {}

  ngOnInit() {
//    this.metaService.updateTag({
//      property: 'og:url',
//      content: 'https://test.com/'
//    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'title'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Description'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://pillartechnology.com/dist/assets/work/connected-car-cs.jpg'
    });
  }
}
