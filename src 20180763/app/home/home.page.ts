import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(public d: DataService, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z@.]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login(val) {
    if (this.loginForm.valid) {
      this.d.email = val.email;
      this.d.password = val.password;
      this.d.loginUser(val.email, val.password).then(() => { console.log('Login Successful ' + val.email); }
      );
    }
  }
}
