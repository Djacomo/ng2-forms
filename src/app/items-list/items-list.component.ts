import {Component, OnInit} from '@angular/core';
import {ItemComponent} from '../item';
import {isSimpleTemplateString} from "codelyzer/util/utils";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemsList: ItemComponent[] = [];

  constructor() {

    this.itemsList.push(new ItemComponent());
    this.itemsList.push(new ItemComponent());
    this.itemsList.push(new ItemComponent());
    this.itemsList.push(new ItemComponent());


    console.log("Costruttore: ItemsList", this.itemsList);

  }

  ngOnInit() {
    console.log("onInit: ItemsList");
  }

}
