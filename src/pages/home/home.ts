import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage }from '../list/list';
import { CitePage }from '../cite/cite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCites(){
  	this.navCtrl.push(ListPage);
  }

  openNewCite(){
  	this.navCtrl.push(CitePage);
  }

  logOut(){

  }


}
