import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../Article";

@Component({
  selector: 'app-from-edit',
  templateUrl: './from-edit.component.html',
  styleUrls: ['./from-edit.component.css']
})
export class FromEditComponent implements OnInit {

  editFrom: FormGroup;
  urlRegex:string ='^(https://)(\w*)$';
  constructor() { }

  ngOnInit(){
    this.editFrom = new FormGroup({
      id: new FormControl(this.arEdit.id),
      title: new FormControl(this.arEdit.title,[Validators.minLength(10),
        Validators.maxLength(150)]),
      url: new FormControl(this.arEdit.url,[Validators.required,
        Validators.pattern(this.urlRegex)]),
    });
  }

  @Input() arEdit: Article;
  @Output() saveAr =new EventEmitter();
  save(){
    const art: Article=this.editFrom.value;
    this.saveAr.emit(art);
  }
}
