import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  name;
  age;
  gender;
  phone;
  email;
  membership_types = ['Weakly', 'Monthly', 'Free Time']
  membership_type;
  fields_of_interest = [
    { val: "Watercolor and gouache", checked: false },
    { val: "Sketching and drawing", checked: false },
    { val: "Mixed media", checked: false },
    { val: "Art journaling", checked: false }
  ]
}
