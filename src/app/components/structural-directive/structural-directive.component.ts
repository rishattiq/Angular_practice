import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

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
  {Id:12,name:"Rish",city:"Islamabad",isActive:false},
  {Id:32,name:"Bish",city:"Pindi",isActive:true},
  {Id:14,name:"Kish",city:"Isl",isActive:false},
  {Id:87,name:"Sish",city:"Island",isActive:true},
  {Id:65,name:"Dish",city:"IceLand",isActive:false},
  {Id:90,name:"Mish",city:"bad",isActive:true},
]
showdiv(){
  this.isdiv1Visible = true;
}

hidediv(){
  this.isdiv1Visible = false;
}

toggle(){
  this.isdiv2Visible=!this.isdiv2Visible;
}

navigateto(){

  this.router.navigateByUrl('attribute-directive');
}


}
