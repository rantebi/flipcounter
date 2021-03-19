import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flip-digit',
  templateUrl: './flip-digit.component.html',
  styleUrls: ['./flip-digit.component.sass']
})
export class FlipDigitComponent implements OnInit { 
  upperClasses : String = "upper";

  constructor() { }

  ngOnInit() {
  }

}
