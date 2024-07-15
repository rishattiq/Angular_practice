import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { AlertComponent } from '../reusable-component/alert/alert.component';
import { ButtonComponent } from '../reusable-component/button/button.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,AlertComponent,ButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {
  user: any = {
    id: '',
    title: '',
    body: ''
  };

  users: any[] = [];

  http = inject(HttpClient);


  constructor(private usersrv: UserService){

  }

  getData(data:any){

   console.log(data);

  }

  ngOnInit(): void {
    this.getusers();
  }

  onEdit(data:any){
    this.user=data;
  }

  

  onDelete(id:number){

    const isDelete=confirm("are u sure to delete?");

    if(isDelete){
      this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe((data:any) => {
        if(data){
          alert('User deleted successfully');
          this.getusers();
        }
        else{
          alert(data.message)
        }
       
      });
    }
   
    
  }

  onUpdate(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.user).subscribe((data: any) => {
      if (data) {
        alert('User updated successfully');
     this.getusers();
      } else {
        alert(data.message);
      }
    });
  }

  // onSubmit() {
  //   this.http.post('https://jsonplaceholder.typicode.com/posts', this.user).subscribe((data: any) => {
  //     if (data) {
  //       alert('User added successfully');
  //       this.getusers();
  //     } else {
  //       alert(data.message);
  //     }
  //   });
  // }

//   getusers() {
//     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
//       this.users = data;
//     });
//   }
// }
getusers() {
this.usersrv.getusers().subscribe((data: any) => {
         this.users = data;
       });
}

onSubmit() {
  this.usersrv.onSubmit(this.user).subscribe((data: any) => {
        if (data) {
          alert('User added successfully');
          this.getusers();
         } else {
           alert(data.message);
      }
      });
     }
     }