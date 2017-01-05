import {Component} from '@angular/core';
import {Item} from "./item/item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Item[];

  constructor() {
    console.log("Costruttore: AppComonent");

    this.items = [];

    for(let i = 0; i < 10; i++) {
      this.items.push(new Item(""+i, i));
    }

  }

  addItem(label: HTMLInputElement, value: HTMLInputElement): boolean {
    console.log(`Aggiungo Item ${label.value} ${value.value}`);
    this.items.push(new Item(label.value, value.value));
    label.value = '';
    value.value = '';
    console.log('Numero elementi ', this.items.length);
    return false;
  }



}
