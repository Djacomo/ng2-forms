import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  label: string;

  constructor() {
    console.log("Costruttore: Item");
  }

  ngOnInit() {

    console.log("onInit: Item");

  }

}
