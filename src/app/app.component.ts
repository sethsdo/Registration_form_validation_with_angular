import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  current = false
  user = new User();
  users = [];
  pwd: boolean = false

  checkPwd(pwd: string, pwdconf: string) {
    if (pwd === pwdconf ) {
      console.log("correct")
      this.pwd = true
    }
    else if (pwd !== pwdconf){
      console.log("invalid")
      this.pwd = false
    }
    
  }
  onSubmit(){

    console.log(1)
    this.current = true
    this.users.push(this.user)
    this.user = new User()
  }


}
