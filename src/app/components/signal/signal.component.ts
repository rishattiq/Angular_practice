import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  firstname = signal("Arni")
  lastname = signal("Attiq")

  fullname = computed(()=> this.firstname()+ "  " + this.lastname())
  rollno =signal<number> (123)

  user = signal(["Me","You","They"])

  userObj = signal({

    name: "Arni",
    age: 20,
    rollno: 123
  })




  constructor(){
    // this.firstname.set("World")
    // this.rollno.set(456)
  }

  onchange(){
    this.firstname.set("Hello")
    this.rollno.set(123)
  }

  change_first_name(){
    this.firstname.set("Safi")
  }


  change_last_name(){
    this.lastname.set("Khan")
  }

  Adduser(){
    this.user.set([...this.user(),"Us"])
  }

  change_age(){
    this.userObj.set({...this.userObj(),age: 21})
  }

}
