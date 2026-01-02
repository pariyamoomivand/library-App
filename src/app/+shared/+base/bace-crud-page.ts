import { inject } from '@angular/core';
import { Thing } from './base-thing';
import { BaseService } from './base-service';

export class BaseCrudPage<T extends Thing> {
  save() {
    if (this.action == 'add') {
      this.setService.add(this.item);
    } else if (this.action == 'edit') {
      this.setService.edit(this.item);
    } else if (this.action == 'remove') {
      this.setService.remove(this.item);
    }
    this.refreshData();
    this.action = 'list';
  }
  // ngOnInit(): void {
  //   this.refreshData();
  // }
  data: T[] = [];
  item!: T;
  setService!: BaseService<T>;
  action: string = 'list';
  refreshData() {
    this.data = this.setService.list();
  }
  add() {
    this.action = 'add';
    this.addPrepair();
    };
    addPrepair(){

    }
  edit(book: T) {
    this.item = { ...book };
    this.action = 'edit';
  }
  remove(book: T) {
    this.item = { ...book };
    this.action = 'remove';
  }
  cancel() {
    this.action = 'list';
  }
}
