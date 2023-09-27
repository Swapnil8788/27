import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { outputAst } from '@angular/compiler';
import { Validators } from '@angular/forms';
import { ProductService } from "./../users.service"

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  visible: boolean = true
  addUser:boolean = true;
  updateUser:boolean = false
  users:any[]= []
  usersArray:any[] = this.userServices.userDetailsInService



  @Input() visibleP: boolean;
  @Input() editId;

  @Output() visibleC = new EventEmitter<boolean>()

  userDetails = new FormGroup({
    userName : new FormControl(""),
    userId: new FormControl(""),
    userEmail: new FormControl(""),
    userPhone: new FormControl(""),
    userPrice: new FormControl(""),
    userLocation: new FormControl(""),
    userDOB: new FormControl(""),
    userGender:new FormControl("")
    
  })



  //validators 
  // [Validators.required, Validators.email]
  // [Validators.required, Validators.pattern("[0-9]{10}")]

  get userId() {
    return this.userDetails.get('userId')
  }
  get userName(){
    return this.userDetails.get('userName')
  }
  get userEmail() {
    return this.userDetails.get('userEmail')
  }
  get userPhone() {
    return this.userDetails.get('userPhone')
  }
  get userPrice() {
    return this.userDetails.get('userPrice')
  }
  get userLocation(){
    return this.userDetails.get('userLocation')
  }
  get userGender(){
    return this.userDetails.get('userGender')
  }
  



  constructor(private userServices:ProductService){}

  ngOnInit(): void {
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.visible = this.visibleP
    
    

  }
  onAddButton(){
    this.users.push(this.userDetails.value)
    this.userServices.userDetailsInService = [...this.usersArray,...this.users]
    this.visible = false
    this.visibleC.emit(false)
    
  }
  updateDetails(){
    console.log("update details opened");
    

  }
  cancelUser(){

  }


  resetNclose() {
    this.visibleC.emit(false)
    this.visible = false
  }

  click(){
    
  }




}
