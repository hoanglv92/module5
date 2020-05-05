import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'namecard';
  run = 0;
  countdownMsg = '';
  countdownAliasMsg = '';
  finishCountdown() {
    this.countdownMsg = 'Finished!';
  }

  endCountdown() {
    this.countdownAliasMsg = 'Ended!';
  }

  onRateChange(value) {
    console.log(value);
  }
  checkRun(){
    for (this.run === 0 ; this.run >= 100 ; this.run += 10){
      this.run += 10;
      if (this.run === 100){
        this.run = 0;
      }
    }
  }
  ngOnInit() {
    // @ts-ignore
    setTimeout(this.checkRun(), 1000);
  }
}
