import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'FlipCounter';

  digit$ : BehaviorSubject<string> = new BehaviorSubject("0");

  constructor(){
    let i : number = 0;
    setInterval(() => {
      this.digit$.next(""+i++);
    }, 1000);

  }
  
}
