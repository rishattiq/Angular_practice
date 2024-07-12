import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributedirectivesComponent } from './components/attributedirectives/attributedirectives.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';

import { ForComponent } from './components/controlflow/for/for.component';
import { IfelseComponent } from './components/controlflow/ifelse/ifelse.component';
import { SwitchComponent } from './components/controlflow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import {GetApiComponent} from './components/get-api/get-api.component';
import {PostApiComponent} from './components/post-api/post-api.component'


export const routes: Routes = [
    {
        path: "add-emp",
        component: AddEmployeeComponent

    },

    {
        path: "data-binding",
        component: DataBindingComponent

    },

    {
        path: "attribute-directive",
        component: AttributedirectivesComponent

    },

    {

        path: "pipe",
        component: PipeComponent
    },

    {
        path:'forms',
        component: FormsComponent

    },

    {
        path: "employee-list",
        component: EmployeeListComponent

    },
    
    {
        path: "structural-directive",
        component: StructuralDirectiveComponent

    },
   
    {
        path: 'for-comp',
        component:ForComponent
    },
    {
        path: 'ifelse-comp',
        component:IfelseComponent
    },
    {
        path: 'switch-comp',
        component:SwitchComponent
    },
    {
        path: 'reactiveform',
        component: ReactiveComponent
    },

    {
        path: 'postapi',
        component: PostApiComponent
    },

    {
        path: 'getapi',
        component: GetApiComponent


    }

];
