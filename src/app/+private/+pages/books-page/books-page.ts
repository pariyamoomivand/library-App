import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/bace-page';
import {
  BaceCrudComponent,
  Column,
} from '../../../+shared/+base/bace-crud-component/bace-crud-component';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, DecimalPipe, BaceCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCrudPage<BookItem> implements OnInit {
  override dataService = inject(BooksService);
  ngOnInit(): void {
    this.item = {
      title: '',
      publisher: '',
      writer: '',
      price: 0,
    };
    this.refreshData();
  }
  override addPrepair(): void {
    this.item = {
      title: '',
      publisher: '',
      writer: '',
      price: 0,
    };
  }
  columns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'publisher', title: 'ناشر' },
    { field: 'price', title: 'قیمت' },
  ];
}
export interface BookItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
