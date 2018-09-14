import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage }from '../list/list';
import { CitePage }from '../cite/cite';
import { environment }from '../../environments/environments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = environment.user.name;
  
  constructor(public navCtrl: NavController, public navParam: NavParams) {
  }

  openCites(){
  	this.navCtrl.push(ListPage);
  }

  openNewCite(){
  	this.navCtrl.push(CitePage);
  }

  logOut(){

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    
    this.navCtrl.push(page);
  }

  

}
