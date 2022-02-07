import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Item } from '../item.model';
import { countSelector, itemSelector } from '../state/cart.selector';
import { cartState } from '../state/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private store:Store<cartState>) { }
  itemObj:Item|null=null
  countItem:number=0

  items$=this.store.select('item')
  
  ngOnInit(): void {
    // this.store.pipe(select(itemSelector)).subscribe(data=>{
    //   this.itemObj=data
    //   console.log("Item=",this.itemObj)
    // })
    
    // this.store.pipe(select(countSelector)).subscribe(data=>{
    //   this.countItem=data
    //   console.log("Count=",this.countItem)
    // })


  }

}
