import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {book} from "../book";

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
      id: new FormControl(this.bookedit.id),
      title: new FormControl(this.bookedit.title,[Validators.minLength(10),
        Validators.maxLength(150)]),
      author: new FormControl(this.bookedit.author,[Validators.required]),
      description: new FormControl(this.bookedit.description,Validators.required)
    });
  }

  @Input() bookedit: book;
  @Output() saveAr =new EventEmitter();
  save(){
    const art: book=this.editFrom.value;
    this.saveAr.emit(art);
  }

}
