import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { itemSelector } from '../state/cart.selector';
import { cartState } from '../state/cart.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private store:Store<cartState[]>) { }
  count:number=0
  ngOnInit(): void {
    this.store.pipe(select(itemSelector)).subscribe(data=>{
      this.count=data.length
    })
  }

}
