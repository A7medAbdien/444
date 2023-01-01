import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Student {
  name: string,
  age: number,
  gender: string,
  phone: number,
  email: string,
  membership_type: string,
  my_fields: string[]
}

export interface Chocolate {
  id?: string,
  name: string,
  type: string,
  nutrition: string,
  percentage: number,
}

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  public cocoList: Observable<Chocolate[]>;
  private cocoCollection: AngularFirestoreCollection<Chocolate>;

  constructor(public alertCtrl: AlertController, private afs: AngularFirestore) {
    this.cocoCollection = this.afs.collection<Chocolate>('Coco');
    this.cocoList = this.cocoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.addChocolate({
      name: 'Coco',
      type: 'list',
      nutrition: 'Chocolate',
      percentage: 50,
    })
  }

  getChocolates(): Observable<Chocolate[]> {
    return this.cocoList;
  }
  getChocolate(id: string): Observable<Chocolate> {
    return this.cocoCollection.doc<Chocolate>(id).valueChanges().pipe(
      map(choc => {
        choc.id = id;
        return choc
      })
    );
  }

  addChocolate(choc: Chocolate): Promise<DocumentReference> {
    return this.cocoCollection.add(choc);
  }

  updateChocolate(choc: Chocolate): Promise<void> {
    return this.cocoCollection.doc(choc.id).update(
      {
        name: choc.name,
        type: choc.type,
        nutrition: choc.nutrition,
        percentage: choc.percentage
      }
    );
  }

  deleteChocolate(id: string): Promise<void> {
    return this.cocoCollection.doc(id).delete();
  }

  choc;
  Insert() {
    this.cocoCollection.add(this.choc).then((res) => {
      alert('Inserted successfully');
    });
  }

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
      { name: "Ali", age: 22, gender: "Male", phone: 35552223, email: "example3.ex", membership_type: "Weekly", my_fields: ["Mixed media"] },
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
