import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.authenticate(this.username, this.password).subscribe(() => {
      console.log('OK');
    }, (error) => {
      alert('User or password invalid')
      console.error(error);
    })
  }

}
