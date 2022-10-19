import { Injectable } from '@angular/core';

interface Student {
  name: string,
  age: number,
  gender: string,
  phone: number,
  email: string,
  membership_type: string,
  my_fields: string
}


@Injectable({
  providedIn: 'root'
})
export class DataListService {

  public list: Student[] = [
    { name: "Ahmed", age: 20, gender: "Male", phone: 33334444, email: "example2.ex", membership_type: "Free Time", my_fields: "Watercolor and gouache" },
    { name: "Ali", age: 22, gender: "Male", phone: 35552223, email: "example3.ex", membership_type: "Weekly", my_fields: "Mixed media" },
    { name: "Jojo", age: 24, gender: "Female", phone: 35566223, email: "example1.ex", membership_type: "Monthly", my_fields: "Mixed media" }
  ]
  constructor() { }

}
