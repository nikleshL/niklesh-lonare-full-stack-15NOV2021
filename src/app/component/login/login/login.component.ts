import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, private _loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this._loginService.callLogin(this.loginForm.value).subscribe((response) => {
      if(response.status == 'Success' && response.data) {
        this._loginService.isLoggedIn = true;
        this._loginService.userdata = response.data;
        this._loginService.loggedInSuccess();
      } else {
        this._loginService.isLoggedIn = false;
      }
      this.loading = false;
    } , (err) => {
      this._loginService.isLoggedIn = false;
      this.loading = false;
    });
  }
}
