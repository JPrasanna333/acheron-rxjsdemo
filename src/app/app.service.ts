import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscriber } from 'rxjs';
import { IProduct } from './product.entity';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  count = 0;
  product: IProduct = {
    Id: 111,
    Title: "notebook",
    Price: 2000
  }
  
  //Products$: Observable<IProduct>;
 // Products$: Subject<IProduct>;
 Products$: BehaviorSubject<IProduct>;
 // Products$: ReplaySubject<IProduct>;
 //Products$: AsyncSubject<IProduct>;

  constructor() {


    // this.Products$ = new Observable<IProduct>(
    //   (subscriber: any) => {
    //     let count = 0;

    //     setInterval(() => {
    //       count = count + 1;
    //       if (count > 10) {
    //         subscriber.complete();
    //       }
    //       else {
    //         let p: IProduct = {
    //           Id: count,
    //           Title: "Pen" + count,
    //           Price: 10 * count
    //         }
    //         subscriber.next(p);
    //       }
    //     }, 1000)
    //   }
    // );



    // this.Products$ = new Subject<IProduct>();
    // setInterval(()=>{
    //     this.count = this.count + 1; 
    //     let p : IProduct = {
    //       Id:this.count,
    //       Title :"Pen" + this.count,
    //       Price : 10 * this.count
    //     };

    //     if(this.count > 10){
    //       this.Products$.complete();
    //     }
    //     else {
    //       this.Products$.next(p);
    //     }

    // },2000);

    this.Products$ = new BehaviorSubject<IProduct>(this.product);
    setInterval(()=>{
        this.count = this.count + 1; 
        let p : IProduct = {
          Id:this.count,
          Title :"Pen" + this.count,
          Price : 10 * this.count
        };

        if(this.count > 10){
          this.Products$.complete();
        }
        else {
          this.Products$.next(p);
        }

    },1000);

    // this.Products$ = new ReplaySubject<IProduct>();
    // setInterval(()=>{
    //     this.count = this.count + 1; 
    //     let p : IProduct = {
    //       Id:this.count,
    //       Title :"Pen" + this.count,
    //       Price : 10 * this.count
    //     };

    //     if(this.count > 10){
    //       this.Products$.complete();
    //     }
    //     else {
    //       this.Products$.next(p);
    //     }

    // },2000);

    // this.Products$ = new AsyncSubject<IProduct>();
    // setInterval(()=>{
    //     this.count = this.count + 1; 
    //     let p : IProduct = {
    //       Id:this.count,
    //       Title :"Pen" + this.count,
    //       Price : 10 * this.count
    //     };

    //     if(this.count > 10){
    //       this.Products$.complete();
    //     }
    //     else {
    //       this.Products$.next(p);
    //     }

    // },1000);



  }






}


// Pull approach 

// function ----------> one value 
// generators ---------> multiple values 

// push approach 

// promise ---------> one value 
// observable ------> muliple values 
