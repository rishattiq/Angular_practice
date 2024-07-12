import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  standalone: true,
  imports:[FormsModule, JsonPipe,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl(),
      userName: new FormControl("",[Validators.email,Validators.required]),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      isAccept: new FormControl()

    }
  )

  formValue: any;
  onSubmit(){

    this.formValue=this.studentForm.value;
  }
  
}
