import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Item } from '../item.model';
import { ShopingListService } from '../shoping-list.service';
import { addToCart, ADD_TO_CART } from '../state/cart.action';
import { cartState } from '../state/cart.state';
import { itemSelector } from '../state/cart.selector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shoppingListService:ShopingListService,
    private store:Store<cartState[]>) { }

  ngOnInit(): void {
  }

  items=this.shoppingListService.shoppingList

  itemObj:Item|any

  addToCart(item:Item)
  {
    console.log(item)
    const quant=item.quantity+1

    this.store.subscribe(data=>{
      console.log("Store",data)
    })
    
    const cartObj:cartState={
      quantity:1,
      item:item
    }

    console.log("Item obj=", cartObj.item)
    this.store.dispatch(addToCart({cartObj:cartObj}))

    // this.store.pipe(select(itemSelector)).subscribe(data=>{
    //   if(data.length<=0)
    //   {
    //     console.log("Add to cart")
    //     
    //   }
    //   else if(data.includes(cartObj)){
    //     console.log("No Add to cart")
    //   }
    // })
  }
}
