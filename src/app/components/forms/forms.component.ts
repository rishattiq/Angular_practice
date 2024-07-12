import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  student: any={
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    state: '',
    zip:'',
    IsAccept: false

    };

    formValue: any;

    onSubmit(){

      this.formValue = this.student;

    }

    onReset(){
      this.student = null;
    }
  }

