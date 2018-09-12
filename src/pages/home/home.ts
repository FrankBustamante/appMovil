import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitesProvider } from '../../providers/cites/cites';
import { Cite } from '../../models/cites'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	cites : any;

  constructor(public navCtrl: NavController, public citesS: CitesProvider) {
  		this.getCites();
  }

getCites(){
  	console.log("citas");
  	this.citesS.getCites().add(s=>{
  		this.cites = this.citesS.cites;
  	})
}

delete(id:string){
	console.log("eliminando")
	this.citesS.deleteProduct(id);
}

}
