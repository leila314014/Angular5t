import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='LuxProtoss';
  url="https://www.google.com";


  zzz(){
    console.log('123321');
  }


  aaa:Account = {
    account:'lux',
    password:'abc123'
  }

}



export interface Account {
  account:string,
  password:string
}