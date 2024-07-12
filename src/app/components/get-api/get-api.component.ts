import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {


  userList: any[]=[];
  constructor(private http:HttpClient){

  }

  getalluser(){

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      this.userList=data;
      console.log(data);
    }
  )
  }
}
