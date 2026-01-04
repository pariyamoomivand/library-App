import { Injectable } from '@angular/core';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
import { BorrowItem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseCRUDService<BorrowItem>{
  override data:BorrowItem[]=[
    // {id:1,borrowDate:'2025/12/30'},
  ];
  // override data=[
  //   {borrowDate:Date(),member:{id:1,title:'تست'}}
  // ];
  override edit(destination: BorrowItem, source: BorrowItem): void {
    destination.borrowDate=source.borrowDate;
    destination.returnDate=source.returnDate;
    destination.book=source.book;
    destination.member=source.member;
  }
}
