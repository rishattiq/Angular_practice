import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {


  
user: any={
  
    "id": "",
    "title": "",
    "body": ""
};

http = inject(HttpClient);

ngOnInit(): void{


}

onSubmit(){
  this.http.post('https://jsonplaceholder.typicode.com/posts', this.user).subscribe((data: any)=>{
   if(data){

    alert("user added successfully");
    // this.getusers();
    console.log(data);
   }
   else{
    alert(data.message);
   }
    })
  }

// getusers(){
//   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any)=>{

//     this.user=data;
//   })
// }


}


