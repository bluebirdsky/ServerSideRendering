import { Component, ElementRef, OnInit } from '@angular/core';
import * as Vimeo from '@vimeo/player';

@Component({
  selector: 'vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css']
})
export class VimeoComponent implements OnInit {

  player: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.player = this.createNewPlayer();
  }

  createNewPlayer() {
    return new Vimeo(this.elementRef.nativeElement, {
      id: '226964913',
      autoplay: 'true'
    });
  }
}
