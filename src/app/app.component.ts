import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_dashboard';
  titleCard = 'bsssb';
  number = 0
  changeNumber(){
    this.number = this.number + 1
  }
  changeNumber2(){
    if(this.number > 0){
      this.number = this.number - 1
    }else{
      this.number = this.number
    }
  }
}
