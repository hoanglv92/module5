import { Component, OnInit } from '@angular/core';
import {DateUltiService} from "../date-ulti.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUltiService) { }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
