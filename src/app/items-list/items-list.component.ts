import { Component, OnInit } from '@angular/core';
import { ItemComponent} from '../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemsList: ItemComponent[];


  constructor() { }

  ngOnInit() {
  }

}
