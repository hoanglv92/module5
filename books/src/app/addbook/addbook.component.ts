import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {book} from "../book";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  editFrom: FormGroup;

  constructor() {
  }

  @Output() addbook = new EventEmitter();
  ngOnInit(): void {
    this.editFrom = new FormGroup({
      title: new FormControl('', [Validators.minLength(10),
        Validators.maxLength(150)]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }

  add() {
    const book: book=this.editFrom.value;
    this.addbook.emit(book);
  }

}
