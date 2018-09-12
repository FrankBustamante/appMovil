
  import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Cite } from '../../models/cites';
import { User } from '../../models/user';

/*
  Generated class for the CitesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitesProvider {

constructor(private http:Http,private httpC:HttpClient) { }

   urlApi:string="http://localhost:3000/api/cite";
   cites:User;


   

  

  getCites(){
      //let token =this.auth.getToken();  
  		//let headers = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
      
  	return	this.http.get(this.urlApi)
  		     .subscribe(res=>{
  		     	this.cites = res.json();
  	        	console.log("res "+res.json())
  	        })
  }

 

  postProduct(cite:Cite){
    //let token =this.auth.getToken();
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   
    return this.http.post(this.urlApi,cite,)
         .map(res =>{

         }).subscribe(res=>{
             console.log(res);
         });
         
  }

  putProduct(cite:Cite){
      //let token =this.auth.getToken();
      /*const httpOptions = {
        headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};
	*/
      return this.httpC.put(`${this.urlApi}/`,cite).map(res =>{});
    }

  deleteProduct(id:string){
   // let token =this.auth.getToken();
    //const httpOptions = {
      //headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};

    return this.http.delete(`${this.urlApi}/${id}`)
         .map(res =>{
         	console.log("eliminado")
         }).subscribe(res=>{

         });
  }


}
