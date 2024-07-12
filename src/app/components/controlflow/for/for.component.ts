import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from '../../data-binding/data-binding.component';
import { StructuralDirectiveComponent } from '../../structural-directive/structural-directive.component';
import { AttributedirectivesComponent } from '../../attributedirectives/attributedirectives.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-for',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,StructuralDirectiveComponent,AttributedirectivesComponent,RouterLink,CommonModule,FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  daynumber:string='';
  
  
isdiv1Visible: boolean = true;
isdiv2Visible: boolean = true;

num1:string='';
num2:string='';

isActive:boolean=true;
selectedState:string='';



cityArray: string[] =['1','2','3','4'];

constructor(private router: Router){

}

studentList: any[] = [
  {Id:12,name:"Rish",gender:"male" ,city:"Islamabad",isActive:false, marks:20},
  {Id:32,name:"Bish",gender:"female" ,city:"Pindi",isActive:true, marks:30},
  {Id:14,name:"Kish",gender:"female" ,city:"Isl",isActive:false, marks:40},
  {Id:87,name:"Sish",gender:"male" ,city:"Island",isActive:true, marks:50},
  {Id:65,name:"Dish",gender:"female" ,city:"IceLand",isActive:false, marks:80},
  {Id:90,name:"Mish",gender:"male" ,city:"bad",isActive:true, marks:100},
]

}
