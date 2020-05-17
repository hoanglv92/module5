import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerFrom: FormGroup;
  regex = '^\\+84\\d{9,10}$';
  ngOnInit(): void {
    this.registerFrom = new FormGroup({
      email: new FormControl('',
        [ Validators.required, Validators.email]),
      pwGroup: new FormControl({
        password: new FormControl('',
          [ Validators.required,
            Validators.maxLength(20),
            Validators.minLength(5)]),
        repassword: new FormControl('')
      }, comparePassword),
      phone: new FormControl('', Validators.pattern(this.regex))
    });
  }

  onSubmit() {
  }
}
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.repassword) ? null : {passwordnotmatch: true};
}
