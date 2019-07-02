import { Component, OnInit } from '@angular/core';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  customerList: Array<any> = customers;

  constructor() { }

  ngOnInit() {
  }

}
