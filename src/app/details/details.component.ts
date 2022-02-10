import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from '../item.model';
import { ShopingListService } from '../shoping-list.service';
import { addToCart } from '../state/cart.action';
import { cartState } from '../state/cart.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private shopService:ShopingListService,
    private store:Store<cartState>) { }
    itemObj:Item|null=null
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.shopService.shoppingList.forEach(item=>{
        if(item.id==data.get('id'))
          this.itemObj=item
      })
    })
  }

  addToCart(itemObj:Item|null)
  {
    const cartObj:cartState={
      quantity:1,
      item:itemObj
    }
    this.store.dispatch(addToCart({cartObj:cartObj}))
  }

}
