import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule,DecimalPipe],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  membersService = inject(MembersService);
  data: MemberItem[] = [];
  action:string='list';
  item:MemberItem={
    id:0,
    fullName:'',
    dateOfMembership:''
  };

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData() {
    this.data = this.membersService.list();
  }
  add() {
    this.action='add';
    this.item={
          id:0,
    fullName:'',
    dateOfMembership:''
    };
  }
  save(){
    this.membersService.add(this.item);
    this.refreshData();
    this.action='list';
  }
  cancel(){
    this.action='list';
  }
}
export interface MemberItem {
  id: number;
  fullName: string;
  dateOfMembership: string;
}
