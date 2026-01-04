import { Component, inject, OnInit } from '@angular/core';
import { Thing } from '../../../+shared/+base/base-thing';
import { BookItem } from '../books-page/books-page';
import { MemberItem } from '../members-page/members-page';
import { BaseCrudPage } from '../../../+shared/+base/bace-page';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { BorrowsService } from './borrows-service';
import { BaceCrudComponent, Column } from '../../../+shared/+base/bace-crud-component/bace-crud-component';

@Component({
  selector: 'app-borrows-page',
  imports: [FormsModule,DecimalPipe,BaceCrudComponent],
  templateUrl: './borrows-page.html',
  styleUrl: './borrows-page.scss',
})
export class BorrowsPage extends BaseCrudPage<BorrowItem> implements OnInit{
  override dataService=inject(BorrowsService);
  ngOnInit(): void {
    this.refreshData();
  }
  override addPrepair(): void {
    // this.item={
    //   borrowDate:new Date(),
    //   returnDate:new Date(),
    //   book:[{title:'',writer:'',publisher:'',price:0}],
    //   member:
    // };
  }
  columns:Column[]=[
    {field:'id',title:'شناسه'},
    {field:'borrowDate',title:'تاریخ امانت'},
    {field:'returnDate',title:'تاریخ بازگردانی'},
    {field:'book',title:'کتاب'},
    {field:'member',title:'کاربر'},
  ];
}

export interface BorrowItem extends Thing{
  borrowDate:Date;
  returnDate?:Date;
  book:BookItem;
  member:MemberItem;
}