import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import customers from '../../shared/data/data';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.scss']
})
export class CustomerdataComponent implements OnInit {

  public identifier: any;
  public result: any;

  public customers: Array<any>;

  public selectedCustomer: {
    _id: string,
    index: number,
    guid: string,
    age: number,
    name: string,
    gender: string,
    company: string,
    email: string,
    phone: string,
    address: string
  };

  constructor(private route: ActivatedRoute) {
    this.customers = customers;
  }

  ngOnInit() {
    //this.identifier = this.route.snapshot.params['id'];

    this.route.params.subscribe(miParams => {
      this.identifier = miParams['id'];
    });

    if (this.customers[this.identifier] === undefined) {
      this.identifier = '0';
    } else {
      /*
      this.selectedCustomer = customers.find(e => {
        return e.index == this.identifier;
      });*/

      this.selectedCustomer = this.customers[this.identifier];
    }

  }

}
