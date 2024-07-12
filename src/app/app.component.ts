import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component'
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import {StructuralDirectiveComponent} from './components/structural-directive/structural-directive.component';
import { AttributedirectivesComponent } from './components/attributedirectives/attributedirectives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,StructuralDirectiveComponent,AttributedirectivesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
