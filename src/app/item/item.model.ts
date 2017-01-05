/**
 * Created by djacomo on 05/01/17.
 */
export class Item {

  label: string;
  value: any;

  constructor(label: string, value: any) {
    console.log(`Costruttore: Item ${label}, ${value}`);

    this.label = label;
    this.value = value;
  }


  public toString()  {
    return `Item (label: ${this.label}, value: ${this.value})`;
  }

}
