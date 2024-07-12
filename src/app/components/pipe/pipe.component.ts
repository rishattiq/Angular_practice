import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable,map } from 'rxjs';
import { NaPipe } from '../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe, JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstname: string="angular";
  currentdate: Date =new Date();
  currentTime: Observable<Date>=new Observable<Date>;

  student: any={
    name: "john",
    age: 20,
    empId: 123,
    address: 'hello'
  };

  constructor()
  {
    // setInterval(()=>
    // {
    //   this.currentTime= interval(1000).pipe(map(()=>new Date()))


    // },5000)
  }
}
