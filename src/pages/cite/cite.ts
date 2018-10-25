import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { Cite }from '../../models/cites';
import {  CitesProvider }from '../../providers/cites/cites';
import { environment }from '../../environments/environments';
import { UsersProvider }from '../../providers/users/users';

/**
 * Generated class for the CitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cite',
  templateUrl: 'cite.html',
})
export class CitePage {
	cite: Cite = {
		date: "",
    type : "",
    medic :"",
    pacient : environment.user.name,
    check : null
	}

  medics;

  constructor(public navCtrl: NavController, public navParams: NavParams, public citeS: CitesProvider,
    public userS: UsersProvider) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.userS.getUsers().then(resolve =>{
      this.medics = resolve;
      console.log(`page ${this.medics[0].name}`)
    });
  }

  addCite(){
  	this.citeS.postCites(this.cite).then(resolve =>{
  		this.cite.type = "";
      this.cite.medic = "";
      this.cite.date ="";
  	})
  }

}
