import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage {
  items!: any[];
  newItemName: string;

  constructor(private itemService: ItemService, private navCtrl: NavController) {
    this.newItemName = '';
  }

  ionViewDidEnter() {
    this.items = this.itemService.getItems();
  }

  addItem() {
    if (this.newItemName.trim() !== '') {
      const newItem = { name: this.newItemName };
      this.itemService.addItem(newItem);
      this.newItemName = '';
    }
  }

  removeItem(item: any) {
    this.itemService.removeItem(item);
  }

  editItem(item: any) {
    item.isEditing = true;
  }

  saveItem(item: any) {
    item.isEditing = false;
  }

  navigateToItemDetail(item: any) {

  }
}