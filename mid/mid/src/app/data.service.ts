import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  name: string,
  score: string,
  icon: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  List: Product[] = [];
  constructor() { }
}
