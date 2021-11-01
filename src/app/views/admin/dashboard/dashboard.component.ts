import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = "hola mundo 2";
  image = {
    src: "../../../../favicon.ico"
  }
  user = { name: '', email: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClickHola() {
    alert("Hola");
    //this.router.navigateByUrl("/admin/users");
  }

  onClickSaveForm() {
    alert(JSON.stringify(this.user));
  }
}
