import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  searchQuery: string = '';
  items: string[];
  list_ds:Array<any>=[
    {
      id:1,
      name:"thơi Trang Nam"
  },
  {
    id:2,
    name:"thơi Trang Nữ"
},
{
  id:3,
  name:"thơi Trang Trẻ Em"
},
{
  id:4,
  name:"thơi Trang Giày"
},
{
  id:5,
  name:"thơi Trang Nam"
}
];
  constructor() { }

  ngOnInit() {
  }

}
