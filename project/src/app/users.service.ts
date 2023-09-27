import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  userDetailsInService = [
    {
      userName: "abc",
      userId: 21,
      userEmail: "h@h.com",
      userPhone: 22,
      userDOB: "18-03-2023",
      userGender: "male",
      userLocation: "Hyderabad",
      userPrice: 2000
    },{
      userName: "abc",
      userId: 22,
      userEmail: "h@h.com",
      userPhone: 22,
      userDOB: "18-03-2023",
      userGender: "male",
      userLocation: "Hyderabad",
      userPrice: 2000
    },{
      userName: "abc",
      userId: 23,
      userEmail: "h@h.com",
      userPhone: 22,
      userDOB: "18-03-2023",
      userGender: "male",
      userLocation: "Hyderabad",
      userPrice: 2000
    }

  ]

  getUserDetails() {
    return this.userDetailsInService
  }
  getProductsMini() {
    return Promise.resolve(this.getUserDetails());
  }



  constructor() { }
}
