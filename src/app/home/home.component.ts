import { Component, OnInit } from '@angular/core';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shoppingListService:ShopingListService) { }

  ngOnInit(): void {
  }

  items=this.shoppingListService.shoppingList

}
