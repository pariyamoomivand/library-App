import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseCRUDService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'برنامه نویسی', writer: 'تست', publisher: 'تست', price: 8000 },
    { id: 2, title: 'پایگاه داده', writer: 'تست', publisher: 'تست', price: 9000 },
    { id: 3, title: 'ساختمان داده', writer: 'تست', publisher: 'تست', price: 10000 },
    { id: 4, title: 'ساختمان گسسته', writer: 'تست', publisher: 'تست', price: 11000 },
    { id: 5, title: 'مدار منطقی', writer: 'تست', publisher: 'تست', price: 12000 },
  ];
  // override edit(book: BookItem): void;
  // override edit(destination: unknown, source?: unknown): void {
  override edit(destination: BookItem, source: BookItem): void {
    destination.price = source.price;
    destination.publisher = source.publisher;
    destination.title = source.title;
    destination.writer = source.writer;
  }
}
