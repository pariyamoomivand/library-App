import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, title: 'برنامه نویسی', writer: 'تست', publisher: 'تست', price: 8000 },
    { id: 2, title: 'پایگاه داده', writer: 'تست', publisher: 'تست', price: 9000 },
    { id: 3, title: 'ساختمان داده', writer: 'تست', publisher: 'تست', price: 10000 },
    { id: 4, title: 'ساختمان گسسته', writer: 'تست', publisher: 'تست', price: 11000 },
    { id: 5, title: 'مدار منطقی', writer: 'تست', publisher: 'تست', price: 12000 },
  ];
  list() { //Create
    return [...this.data];
  }
  add(book: BookItem) { //Read
    this.data.push(book);
  }
  update(){ //Update

  }
  remove(){ //Delete

  }
  //RCUD(Create,Read,Update,Delete)
}
