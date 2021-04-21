import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: any;
  loginFormgroup: any = FormGroup;
  loginDetails: any;
  isLogin: boolean = false;
  validUser: string = '';

  constructor() {
    this.loginFormgroup = new FormGroup({
      userid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.users = [{"userid": "abc@media.com","password": "abc123","username": "tom"}, {"userid": "def@media.com","password": "def123","username": "dick"}];
  }

  login() {
    let loginFormValues = this.loginFormgroup.value;
    let userDataFilter = this.users.filter(x => x.userid == loginFormValues.userid);
    this.isLogin = userDataFilter != undefined && userDataFilter.length > 0 ? true : false;
    this.validUser = this.isLogin == false ? 'Invalid User' : 'Valid User';
    if(this.validUser != undefined && this.validUser != '' && this.validUser == 'Valid User') {
      this.loginDetails = {
        userid: userDataFilter[0].userid,
        username: userDataFilter[0].username
      };
    } else {
      this.loginDetails = {
        userid: '',
        username: ''
      };
    }
    localStorage.setItem('userDetails', this.loginDetails);
    alert(this.validUser);
  }

  logout() {
    this.loginFormgroup.reset();
    this.loginDetails = this.loginDetails != undefined ? undefined : this.loginDetails;
    localStorage.removeItem('userDetails');
    this.isLogin = false;
  }

}
