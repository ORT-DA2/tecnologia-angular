import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    console.log("En on init")
    this.userService.getUsers().subscribe(
      users => {
        console.log(JSON.stringify(users));
        alert("Todos los usuarios");
      },
      error => {
        console.error(error.mensaje);
        alert("Error");
      },
      () => {
        alert("Termine")
      }
    );;
  }
}
