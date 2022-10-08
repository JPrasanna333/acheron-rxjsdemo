import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS Demo';
  isChild2Visible = false; 
  isChild3Visible = false; 
  showChild2():void{
    this.isChild2Visible = true; 
  }
  showChild3():void{
   this.isChild3Visible = true 
  }
}
