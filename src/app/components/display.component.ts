import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../model/uno';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

   @Input() contents: Players[];

  constructor() { }

  ngOnInit() {
  }

}