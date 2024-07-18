import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    Username: '',
    password: ''

  };

  router = inject(Router);
  http = inject(HttpClient);
  
  onLogin(){
    if(this.userObj.Username=="admin" && this.userObj.password=="1234"){
      alert("Login success");
      localStorage.setItem('loginuser', this.userObj.Username)
      this.router.navigateByUrl('layout')
    }
    else{
      alert("Login failed")
    }

  
  }

}
