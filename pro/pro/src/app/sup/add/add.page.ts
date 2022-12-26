import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  addSup: FormGroup
  constructor(public d: DataService, public fb: FormBuilder) {
    this.addSup = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2), Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+")])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      img: [''],
    });
  }


  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  phoneCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} number remaining`;
  }

  ngOnInit() {
  }

  addSupVal(val) {
    this.d.addSup(val);
  }
}
