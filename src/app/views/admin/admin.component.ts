import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  optionsOfSidebar: any[] = [{ name: "Dashboard admin", image: { src: "../../../../favicon.ico", alt: "algo" } }];
  adminTable: any = {
    heads: ["Id", "Name", "Email"],
    rows: [
      {
        values: ["1", "Daniel", "da@gmail.com"]
      },
      {
        values: ["2", "Alejo", "ale@gmail.com"]
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  pasoAlgoEnSidebar(e: any) {
    alert(JSON.stringify(e));
  }
}
