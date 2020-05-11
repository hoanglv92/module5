import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() isShowAdd = new EventEmitter();
  isShowAddAr: boolean = true;
  constructor() {
  }


  ngOnInit(): void {

  }

  hiddenFrom() {
    this.isShowAddAr=false;
    // @ts-ignore
    this.isShowAdd.emit(this.isShowAddAr);

  }

  showFrom() {
    this.isShowAddAr = true;
    // @ts-ignore
    this.isShowAdd.emit(this.isShowAddAr);
  }
}
