import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean=false;
  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.AccountService.login(this.model).subscribe(Response => {
      console.log(Response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.loggedIn=false;
  }

}
