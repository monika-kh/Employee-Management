import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  onBtnClick(){
    this.router.navigate(['/employee/add_attendence']);
  }


}
