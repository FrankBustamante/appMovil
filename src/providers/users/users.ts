import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';



/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

	urlApi:string="https://api-movil.herokuapp.com/api/user";
    users: User;

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  getUsers(){
      //let token =this.auth.getToken();  
  		//let headers = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
      
  	return	this.http.get(this.urlApi)
  		     .subscribe(res=>{
  		     	this.users = res as User;
  	        	console.log("res "+res)
  	        })
  }

 

  postUser(user: User){
    //let token =this.auth.getToken();
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   
    return this.http.post(this.urlApi,user,)
         .map(res =>{

         }).subscribe(res=>{
             console.log(res);
         });
         
  }

  putUser(user: User){
      //let token =this.auth.getToken();
      /*const httpOptions = {
        headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};
	*/
      return this.http.put(`${this.urlApi}/`,user).map(res =>{

      });
    }

  deleteUser(id: string){
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


