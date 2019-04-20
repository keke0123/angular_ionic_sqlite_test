import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

import { DatabaseService, Dev } from './../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  developers: Dev[] = [];
  // products: Observable<any[]>;
  constructor(private db: DatabaseService) {
  }
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        });
        // this.products = this.db.getProducts();
      }
    });
  }
  testBtn1() {
    this.db.getTestData01()
        .then(res => {
          console.log(res);
          console.log(res.rows.item(0).name);
          console.log(res.rows.item(1).name);
        })
  }
}
