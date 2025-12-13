import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  data: MemberItem[] = [
    { id: 1, fullName: 'کاربر1', dateOfMembership: '1404/4/26' },
    { id: 2, fullName: 'کاربر2', dateOfMembership: '1404/5/26' },
    { id: 3, fullName: 'کاربر3', dateOfMembership: '1404/5/30' },
    { id: 4, fullName: 'کاربر4', dateOfMembership: '1404/7/2' },
    { id: 5, fullName: 'کاربر5', dateOfMembership: '1404/7/9' },
  ];
  add(member:MemberItem) { //Create
    this.data.push(member);
  }
  list(){ //Read
    return[...this.data];
  }
  update(){ //Update

  }
  remove(){ //Delete

  }
  //CRUD(Create,Read,Update,Delete)
}
