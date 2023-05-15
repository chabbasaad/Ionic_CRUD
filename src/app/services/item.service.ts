import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: any[] = [];

  constructor() { }

  getItems(): any[] {
    return this.items;
  }

  addItem(item: any): void {
    this.items.push(item);
  }

  removeItem(item: any): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}