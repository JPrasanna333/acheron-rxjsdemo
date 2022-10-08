import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product.entity';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  Products : IProduct[] = []; 
  ProductsSubscription? : Subscription; 
  showMessage = false; 
  ProductObserver : Observer<IProduct> = {
    next:(data:IProduct) =>{
      this.Products.push(data);
    },
    error:(err:any)=>{
      console.log(err);
    },
    complete:() =>{
      console.log('child 1 stream completed');
      this.showMessage = true; 
    }
  }
  constructor(private appservice : AppService) { }

  ngOnInit(): void {

    this.ProductsSubscription = this.appservice.Products$.subscribe(this.ProductObserver);
  // this.ProductsSubscription =  this.appservice.Products$.subscribe(data=>{
  //   console.log(data);
  //  })
  }

  ngOnDestroy(): void {
    if(this.ProductsSubscription != undefined){
      this.ProductsSubscription.unsubscribe();
    }
  }

}
