import { Component, signal } from '@angular/core';

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  courseName : string = "Angular";
  inputType = "Me";
  age :number = 123;
  selection ="city";
  firstName= signal("Arni")
  isOk : boolean = true;
  currentDate : Date = new Date ();
  style = "bg-danger"

  constructor(){

  }

  changeCourseName(){
    this.courseName = "React"
  }
showAlert(message: string) : void{

    alert(message);

  }

}
