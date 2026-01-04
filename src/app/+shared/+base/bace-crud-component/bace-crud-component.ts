import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  templateUrl: './bace-crud-component.html',
  styleUrl: './bace-crud-component.scss',
})
export class BaceCrudComponent {
  @Input() myaction:string='list';
  @Output() onAdd=new EventEmitter;
  @Output() onCancel=new EventEmitter;
  @Input() columns:Column[]=[];
  @Input() data:any[]=[];
  @Output() onEdit=new EventEmitter<any>;
  @Output() onRemove=new EventEmitter<any>;
  @Output() onSave=new EventEmitter;
}

export interface Column{
  title:string;
  field:string;
}