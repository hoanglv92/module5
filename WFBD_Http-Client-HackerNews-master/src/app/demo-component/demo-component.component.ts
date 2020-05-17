import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  // @Input() article: Article;

  @Input() article: string;

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.article = "Tiêu đề mới";
  }

}
