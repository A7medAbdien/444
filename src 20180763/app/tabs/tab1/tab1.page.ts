import { FBService } from './../../fb.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public d: FBService) {
    this.loginForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)])],
    });
  }

  login(val) {
    if (this.loginForm.valid) {

    }
  }
  verify(val, isVal) {
    this.d.verify(isVal)
    this.d.name = val
  }
  reset() {
    this.d.reset()
    this.loginForm.reset()
  }
  ngOnInit() {
  }

}
