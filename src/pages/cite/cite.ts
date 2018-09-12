import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { Cite }from '../../models/cites';
import {  CitesProvider }from '../../providers/cites/cites';
import { environment }from '../../environments/environments';

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
	    medicId :"77788",
	    userId : environment.user._id,
	    check : null
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public citeS: CitesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitePage');
  }

  addCite(){
  	this.citeS.postCites(this.cite).then(resolve =>{
  		
  	})
  }

}
