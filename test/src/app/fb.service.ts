import { Injectable } from '@angular/core';

export interface User {
  name: string,
  shift: boolean[],
  quantity: number,
  status: string,
  approved: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FBService {

  constructor() { }
  verify() { }
}
