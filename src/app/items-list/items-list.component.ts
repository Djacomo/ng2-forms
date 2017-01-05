import {Component, OnInit} from '@angular/core';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemsList: ItemComponent[];

  constructor() {

    this.itemsList = [];

    console.log("Costruttore: ItemsList");
  }

  ngOnInit() {
    console.log("onInit: ItemsList");
  }

}
