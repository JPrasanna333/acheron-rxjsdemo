import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product.entity';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, OnDestroy {

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
      console.log('child 2 stream completed');
      this.showMessage = true; 
    }
  }
  constructor(private appservice : AppService) { }

  ngOnInit(): void {

    this.ProductsSubscription = this.appservice.Products$.subscribe(this.ProductObserver);
  }

  ngOnDestroy(): void {
    if(this.ProductsSubscription != undefined){
      this.ProductsSubscription.unsubscribe();
    }
  }


}
