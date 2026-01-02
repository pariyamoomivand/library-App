import { BookItem } from "../../+private/+pages/books-page/books-page";
import { Thing } from "./base-thing";

export class BaseService<T extends Thing> {
  protected data: T[] = [];
  list() {
    //Create
    return [...this.data];
  }
  add(item: T) {
    //Read
    this.data.push(item);
  }
  edit(item: T) {
    //Update
    const index = this.data.findIndex((b) => b.id == item.id);
    if (index != -1) {
        this.update(this.data[index],item);
    }
  }
  remove(item: T) {
    //Delete
    this.data = this.data.filter((m) => m.id != item.id);
  }
  //RCUD(Create,Read,Update,Delete)
    update(destination:T,source:T){}
}
