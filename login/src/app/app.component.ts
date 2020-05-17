import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
loginFrom: FormGroup;

  ngOnInit(): void {
    this.loginFrom = new FormGroup({
      email: new FormControl('',
        [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(5),
      Validators.maxLength(20)])
    });
  }
  onLogin(){
  }
}
