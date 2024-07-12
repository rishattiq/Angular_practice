import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attributedirectives',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {

  Div1bgclr: string='bg-primary';
  isDiv2active:boolean=false;
  num1: string='';
  num2: string='';
  isActive: boolean = false;

  studentList: any[] = [
    {Id:12,name:"Rish",gender:"male" ,city:"Islamabad",isActive:false, marks:20},
    {Id:32,name:"Bish",gender:"female" ,city:"Pindi",isActive:true, marks:30},
    {Id:14,name:"Kish",gender:"female" ,city:"Isl",isActive:false, marks:40},
    {Id:87,name:"Sish",gender:"male" ,city:"Island",isActive:true, marks:50},
    {Id:65,name:"Dish",gender:"female" ,city:"IceLand",isActive:false, marks:80},
    {Id:90,name:"Mish",gender:"male" ,city:"bad",isActive:true, marks:100},
  ]



  Addblue(){
    this.Div1bgclr= "bg-primary";
  }

  Addred(){
    this.Div1bgclr= "bg-danger";
  }

  Div2active(){
    this.isDiv2active=!this.isDiv2active;
  }
}
