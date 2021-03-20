import { BehaviorSubject, Observable } from 'rxjs';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flip-digit',
  templateUrl: './flip-digit.component.html',
  styleUrls: ['./flip-digit.component.sass']
})
export class FlipDigitComponent implements OnInit { 
  @Input() digit$: BehaviorSubject<string>;
  @Input() timeUnit: number = 1000;
  oldDigit: string = "0";
  upperClasses : String = "upper";

  constructor() {  
  }

  ngOnInit() {
    this.digit$.subscribe(x => {
      setTimeout(() => {
        this.oldDigit = x;
      }, this.timeUnit);
    });
  }

}
