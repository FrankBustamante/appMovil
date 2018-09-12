import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider }from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { environment }from '../../environments/environments'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	email: string;
	pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
  	this.auth.signIn(this.pass, this.email).then(resolve =>{
      
  		if(this.auth.resp.ok) {
        environment.TOKEN = this.auth.resp.token;
        environment.user = this.auth.resp.user;

  			console.log(`token ${environment.TOKEN} user ${this.auth.resp.user} `);
        this.navCtrl.setRoot(HomePage);
  		}
  	})
  }
}
