import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface Student {
  name: string,
  age: number,
  gender: string,
  phone: number,
  email: string,
  membership_type: string,
  my_fields: string[]
}


@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor(public alertCtrl: AlertController) { }

  public name;
  public age;
  public gender;

  // contact information
  public phone;
  public email;

  // membership type
  public membership_types = ['Weekly', 'Monthly', 'Free Time']
  public membership_type;

  public my_fields: string[] = [];

  public fields_of_interests = [
    { val: "Watercolor and gouache", checked: false },
    { val: "Sketching and drawing", checked: false },
    { val: "Mixed media", checked: false },
    { val: "Art journaling", checked: false }
  ]

  public list: Student[] =
    [
      { name: "Ahmed", age: 20, gender: "Male", phone: 33334444, email: "example2.ex", membership_type: "Free Time", my_fields: ["Watercolor and gouache"] },
      { name: "Ali", age: 22, gender: "Male", phone: 35552223, email: "example3.ex", membership_type: "Weekly", my_fields: ["Mixed media", "Watercolor and gouache"] },
      { name: "Jojo", age: 24, gender: "Female", phone: 35566223, email: "example1.ex", membership_type: "Monthly", my_fields: ["Mixed media"] }
    ]

  // handing fields

  private my_fields_list = '';

  // to show the fields or field
  private count_fields = 0;
  private show_field = '';

  async showAlert(member: Student) {
    // alert('massage')

    member.my_fields.forEach(f => {
      this.my_fields_list += "<li> " + f + "</li>";
      this.count_fields++;
    });

    (this.count_fields > 1) ? this.show_field = 'Fields' : this.show_field = 'Field';
    // this.name != null ? this.massage += `Name: ${this.name}<br>` : this.massage += 'Please fill name'

    let x = await this.alertCtrl.create({
      header: 'Assignment 1',
      subHeader: 'The member of the following information:',
      message: `
      Name: ${member.name}<br>
      Age: ${member.age}<br>
      Gender: ${member.gender}<br>

      Contact information: <br>
      Phone: ${member.phone}<br>
      Email: ${member.email}<br>

      Membership Type: ${member.membership_type} <br>

      ${this.show_field} of interest:  ${this.my_fields_list} `
    });

    this.my_fields_list = '';
    this.count_fields = 0;
    x.present();
  }

}
