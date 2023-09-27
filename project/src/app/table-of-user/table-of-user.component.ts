import { Component } from '@angular/core';
import { ProductService } from '../users.service';
import { EventEmitter, Input, Output } from '@angular/core';
import { PopUpComponent } from "../pop-up/pop-up.component"
@Component({
  selector: 'app-table-of-user',
  templateUrl: './table-of-user.component.html',
  styleUrls: ['./table-of-user.component.css']
})
export class TableOfUserComponent {
  visible: boolean = true
  childVisibleComponent: boolean
  addUser: boolean;
  updateDetailsObject:any = {}
  // priceElement: boolean = false
  // id: number = -1
  // addUser: boolean = true
  // UpdateUser: boolean = false
  // inputCheckBoxForEditing: boolean = false
  // disabled: any = false
  // idWarning: boolean = false
  // nameWarning: boolean = false
  // months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // productName:string = ""
  // productEmail:string = ""
  // productNumber:number;
  // productPrice:number;
  // productId:number;
  // @ViewChild('inputMale') inputMale:any;
  // @ViewChild('inputLocation') inputLocation:any;
  // locationButton:string ;
  // @ViewChild('inputage') inputage;


  @Output() addedUserToTable = new EventEmitter<boolean>()

  // inputId: number;
  // indexOfProduct: any;
  // ngOnInit() {
  // }
  // gender: string;
  // location: string;

  constructor(public userServices: ProductService,
    public popUp: PopUpComponent) { };
  ngOnInit(): void {

  }
  ngOnChanges(): void {


  }

  showDialog() {
    this.childVisibleComponent = true
    this.visible = true;
    this.addUser = true


    // this.addUser = true;
    // this.UpdateUser = false
  }
  visibleC(event: boolean) {
    this.visible = event
  }
  editUser(id: number) {
    this.childVisibleComponent = true
    this.visible = true;
    this.addUser = false
    this.popUp.updateDetails(id)
    this.updateDetailsObject = this.userServices.userDetailsInService.filter((user)=>user.userId == id)
    
    


  }
  onDelete(id: number) {
    this.userServices.userDetailsInService = this.userServices.userDetailsInService.filter((user) => user.userId !== id)

  }


  // onAddButton(inputId: HTMLInputElement,
  //   inputName: HTMLInputElement,
  //   inputage: HTMLInputElement,
  //   inputEmail: HTMLInputElement,
  //   inputPhone: HTMLInputElement,
  //   inputMale: HTMLInputElement,
  //   inputFemale: HTMLInputElement,
  //   inputLocation: HTMLSelectElement,
  //   inputPrice: HTMLInputElement,
  //   inputCheckbox: HTMLInputElement) {
  //   this.visible = false;



  //   if (inputMale.checked) {
  //     this.gender = "Male"
  //   }
  //   else {
  //     this.gender = "Female"
  //   }
  //   this.location = inputLocation.value

  //   let date = new Date(inputage.value)
  //   let finalData = ""
  //   finalData = date.getDate() + " " + this.months[date.getMonth()] + " " + date.getFullYear()




  //   const newProduct = {
  //     id: inputId.value,
  //     name: inputName.value,
  //     age: finalData,
  //     email: inputEmail.value,
  //     phone: parseInt(inputPhone.value),
  //     Gender: this.gender,
  //     Location: this.location,
  //     price: parseInt(inputPrice.value),
  //     edit: inputCheckbox.checked

  //   };
  //   console.log(this.userDetails,'userDetails');

  //   this.products = [...this.products, newProduct];
  //   inputName.value = ""
  //   inputage.value = ""
  //   inputEmail.value = ""
  //   inputPhone.value = ""
  //   inputId.value = ""
  //   inputPrice.value = ""

  //   this.userDetails.reset()

  // }

  // onDelete(id: number) {
  //   this.products = this.products.filter((product) => product.id !== id)
  // }
  // edittheRow(id: number) {
  //   this.showDialog()
  //   this.addUser = false;
  //   this.UpdateUser = true

  //   this.products.filter((product)=>{
  //     if(product.id === id){
  //       this.productName = product.name
  //       this.productId = product.id
  //       this.productEmail = product.email
  //       this.productNumber = product.phone
  //       this.productPrice = product.price
  //       if(this.inputLocation.nativeElement.value == "Hyderabad"){
  //         this.locationButton = "Hyderabad"
  //       }else if(this.inputLocation.nativeElement.value == "Benguluru"){
  //         this.locationButton = "Benguluru"
  //       }else if(this.inputLocation.nativeElement.value == "Chennai"){
  //         this.locationButton = "Chennai"
  //       }else{
  //         this.locationButton = "Mumbai"
  //       }

  //     }
  //   })


  // }



  // finalData:any;
  // updateDetails() {

  //   this.products.filter((product) => {
  //     if (product.id == this.productId) {

  //       product.name = this.productName
  //       product.email = this.productEmail
  //       product.phone = this.productNumber
  //       product.price = this.productPrice
  //       if(this.inputMale.nativeElement.checked == true){
  //         product.Gender = this.inputMale.nativeElement.value
  //       }else{
  //         product.Gender = "female"
  //       }
  //       product.Location = this.inputLocation.nativeElement.value
  //       let date = new Date(this.inputage.nativeElement.value)
  //       this.finalData = date.getDate() + " " + this.months[date.getMonth()] + " " + date.getFullYear()
  //       product.age = this.finalData
  //     }
  //   })

  //   this.visible = false

  // }
  // addButton
  // userDetails = new FormGroup({
  //   userId: new FormControl("", [Validators.required]),
  //   userName: new FormControl("", [Validators.required]),
  //   userEmail: new FormControl("", [Validators.required, Validators.email]),
  //   userPhone: new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}")]),
  //   userPrice: new FormControl("", [Validators.required]),
  //   userLocation: new FormControl("", [Validators.required]),
  //   userDOB: new FormControl("", [Validators.required])
  // })




  // get userId() {
  //   return this.userDetails.get('userId')
  // }
  // get userName() {
  //   return this.userDetails.get('userName')
  // }
  // get userEmail() {
  //   return this.userDetails.get('userEmail')
  // }
  // get userPhone() {
  //   return this.userDetails.get('userPhone')
  // }
  // get userPrice() {
  //   return this.userDetails.get('userPrice')
  // }
  // get userLocation(){
  //   return this.userDetails.get('userLocation')
  // }

  // // !newsLetterMappingForm.controls['productType'].valid && (newsLetterMappingForm.controls['productType'].dirty || newsLetterMappingForm.controls['productType'].touched) "


  // cancelUser() {
  //   this.userDetails.reset()
  //   this.visible = false;
  //   console.log(this.userName);

  // }
  // // @ViewChild('f') signupForm: NgForm;

  // // onSubmit() {


  // // }
  // // clicked() {
  // //   console.log(this.userPhone);

  // // }

  // // age: boolean = false
  // // getDate(inputAge: HTMLInputElement) {
  // //   this.age = true
  // //   let date = new Date(inputAge.value)
  // //   let finalData = ""
  // //   console.log(date.getDate(), this.months[date.getMonth()], date.getFullYear())
  // //   finalData = date.getDate() + " " + this.months[date.getMonth()] + " " + date.getFullYear()
  // //   console.log(finalData);

  // // }
  // date:any;
  // clickme(){
  //   this.date = new Date(this.inputage.nativeElement.value) 
  //   console.log(this.date.getDate());


  // }

  click() {
  }



}
