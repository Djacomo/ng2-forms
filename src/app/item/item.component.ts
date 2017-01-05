import {Component, OnInit, Input} from '@angular/core';
import {Item} from "./item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  inputs: ['item'],
  host: {
    class: 'row'
  }
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor() {

  }

  ngOnInit() {
  }

}
