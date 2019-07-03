import { Component, OnInit } from '@angular/core';
import customers from '../../shared/data/data';
import Customer from 'src/app/shared/interfaces/customer.interfaces';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  public customers: Array<any>;

  constructor() {
    this.customers = customers;
  }

  ngOnInit() {
  }

}
