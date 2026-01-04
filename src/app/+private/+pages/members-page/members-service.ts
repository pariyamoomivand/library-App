import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDService<MemberItem>{
  override data: MemberItem[] = [
    {id:1000,fullName:'لی لی زمانی',address:'همدان',mobile:'0990'},
    {id:1001,fullName:'فرشته قصبستانی',address:'همدان',mobile:'0990'},
    {id:1002,fullName:'زی زی رمضانی',address:'همدان',mobile:'0990'}
  ];
  // override update(book: MemberItem): void;
  // override update(destination: unknown, source?: unknown): void {
    override edit(destination: MemberItem, source: MemberItem): void{
    destination.address=source.address;
    destination.fullName=source.fullName;
    destination.mobile=source.mobile;
  }
}
