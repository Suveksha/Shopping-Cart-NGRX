import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Item } from '../item.model';
import { itemSelector } from '../state/cart.selector';
import { cartState } from '../state/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{

  constructor(private store:Store<cartState[]>) { }
  
  cartObjArr:cartState[]|null=null
  totalCost:number=0
  showBool:boolean=true
  quantity:number=1
  totalValue:any=0;
  priceVal:any=0;
  priceVals:any[]=[]
  ngOnInit(): void {
    this.store.pipe(select(itemSelector)).subscribe(data=>{
      this.cartObjArr=[...data]
      console.log("Cart Arr",this.cartObjArr)
      if(this.cartObjArr.length>0)
      this.showBool=false
    });
  }

  decrement(item:Item|any)
  {
   this.quantity=item.quantity
   this.quantity=this.quantity-1
   console.log(this.quantity)
  }

  increment(item:Item|any)
  {
   this.quantity=item.quantity
   this.quantity=this.quantity+1
   console.log(this.quantity)
  }

  total()
  {
    this.priceVals.forEach(price=>{
      this.totalValue+=price
    })
    console.log(this.priceVals)
    return this.totalValue
  }

  priceValue(itemObj:any)
  {
    this.priceVal=itemObj.item.price*itemObj.quantity
    this.priceVals.push(this.priceVal)
    return this.priceVal
  }
}
