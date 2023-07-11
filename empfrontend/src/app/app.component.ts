import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Employee Management';

  constructor(
    private localService: LocalService,
    private router: Router
    ) {}
  
  token: string | undefined;
  type : string | undefined

  ngOnInit():void{
    this.token = this.localService.getToken('token');
    this.type = this.localService.getToken('user_type')
    if (this.token != "" ){
      this.router.navigateByUrl('dashboard');
    }
    //  else if(this.token != "" && this.type == "EMP"){
    //   this.router.navigateByUrl('dashboard')
    // }
    else{
      this.router.navigateByUrl('login')
    }
    }

}