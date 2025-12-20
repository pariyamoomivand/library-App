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
  update(book:BookItem){ //Update
    const index=this.data.findIndex(b=>b.id==book.id);
    if(index!=-1){
      this.data[index].title=book.title;
      this.data[index].writer=book.writer;
      this.data[index].publisher=book.publisher;
      this.data[index].price=book.price;
    }
  }
  remove(book:BookItem){ //Delete
    this.data=this.data.filter(m=>m.id!=book.id);
  }
  //RCUD(Create,Read,Update,Delete)
}
