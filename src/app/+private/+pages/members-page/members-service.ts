import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem>{
  override data: MemberItem[] = [
    {id:1000,fullName:'لی لی زمانی',address:'همدان',mobile:'0990'},
    {id:1001,fullName:'فرشته قصبستانی',address:'همدان',mobile:'0990'},
    {id:1002,fullName:'زی زی رمضانی',address:'همدان',mobile:'0990'}
  ];
  override update(book: MemberItem): void;
  override update(destination: MemberItem, source: MemberItem): void;
  override update(destination: unknown, source?: unknown): void {
    destination.address=source.address;
    destination.mobile=source.mobile;
    destination.fullName=source.fullName;
  }
}
