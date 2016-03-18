import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {DataService} from '../common/data'

@Component({
  selector: 'login'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './app/login/login.html',
  styleUrls: ['./app/login/login.css']
})
export class Login {
  constructor(public router: Router, private dataservice: DataService) {
  }
  public data:string;
  public dataerror:boolean;

  login(event, username, password) {
      var l = this.dataservice.login(username, password);
/*      .subscribe(
      data => {
        this.data = 'ok';
        localStorage.setItem('wytoken', data.token);
        localStorage.setItem('user', data);
        this.router.parent.navigateByUrl('/home');
      },
      err => {
        alert(err.text());
        console.log(err.text());
      }
    );
    */
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}
