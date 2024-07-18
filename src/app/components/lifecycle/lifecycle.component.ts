import { Component,OnInit, DoCheck, AfterViewInit , AfterContentInit ,AfterViewChecked,AfterContentChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit , DoCheck , AfterViewInit , AfterContentInit , AfterContentChecked,AfterViewChecked,OnDestroy{


  constructor() {
  
    console.log('constructor');
  }

  ngOnInit(): void {
      console.log('ngOnInit');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck');
  }

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked');
  }

  
  ngAfterContentChecked():void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }

}
