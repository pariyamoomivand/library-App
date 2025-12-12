import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {
  data:BookItem[]=[
    {id:1,title:'برنامه نویسی',writer:'گاما',publisher:'_',price:8},
    {id:2,title:'برنامه نویسی',writer:'گاما',publisher:'_',price:8},
    {id:3,title:'برنامه نویسی',writer:'گاما',publisher:'_',price:8},
    {id:4,title:'برنامه نویسی',writer:'گاما',publisher:'_',price:8},
    {id:5,title:'برنامه نویسی',writer:'گاما',publisher:'_',price:8},
  ];
}
export interface BookItem {
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}
