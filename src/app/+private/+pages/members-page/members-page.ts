import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/bace-page';
// import { BaseService } from '../../../+shared/+base/base-service';
import {
  BaceCrudComponent,
  Column,
} from '../../../+shared/+base/bace-crud-component/bace-crud-component';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, DecimalPipe, BaceCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit {
  override dataService = inject(MembersService);
  ngOnInit(): void {
    this.item = {
      fullName: '',
      address: '',
      mobile: '',
    };
    this.refreshData();
  }
  override addPrepair(): void {
    this.item = {
      fullName: '',
      address: '',
      mobile: '',
    };
  }
  columns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'fullName', title: 'نام و نام خانوادگی' },
    { field: 'address', title: 'آدرس' },
    { field: 'mobile', title: 'موبایل' },
  ];
}
export interface MemberItem extends Thing {
  fullName: string;
  address: string;
  mobile: string;
}
