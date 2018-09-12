import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cite } from '../../models/cites';
import 'rxjs/add/operator/map';
import { environment }from '../../environments/environments'

/*
  Generated class for the CitesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitesProvider {

	urlApi:string="https://api-movil.herokuapp.com/api/cite";
  url ="http://localhost:3000/api/cite/user";
  cites:Cite;
  httpOptions = {
        headers: new HttpHeaders({'authorization': `Bearer ${environment.TOKEN}` ,'Content-Type':  'application/json','Accept':'application/json'})};

 	constructor(public http: HttpClient) {
		console.log('Hello CitesProvider Provider');
  	}

   	getCites(){
     
     return new Promise(resolve =>{
      this.http.get(`${this.urlApi}/user/${environment.user._id}`,this.httpOptions)
           .subscribe(res=>{
             this.cites = res as Cite;
              console.log("res "+res)
            })
    })	
  	}

 

  postCites(cite: Cite){
    //let token =this.auth.getToken();
   // let headerT = new Headers({'Authorization':`Bearer ${token.token}`,'Content-Type':'application/json'});
   
    return new Promise(resolve =>{
      console.log(`em porceso cita.. ${environment.TOKEN}`)
      this.http.post(this.urlApi,cite,this.httpOptions)
         .map(res =>{
            let r:any = res;
             r.ok;
             resolve({ ok: r.ok })
         }).subscribe(res=>{
             console.log(res);
         });
    })
         
  }

  putCite(cite:Cite){
      //let token =this.auth.getToken();
      /*const httpOptions = {
        headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};
	*/
      return new Promise(resolve =>{
        this.http.put(`${this.urlApi}/`,cite, this.httpOptions)
        .map(res =>{});
      })
    }

  deleteCite(id:string){
   // let token =this.auth.getToken();
    //const httpOptions = {
      //headers: new HttpHeaders({'Authorization': `Bearer ${token.token}`,'Content-Type':  'application/json','Accept':'application/json'})};

    return new Promise(reolve =>{
      this.http.delete(`${this.urlApi}/${id}`,this.httpOptions)
         .map(res =>{
           console.log("eliminado")
         }).subscribe(res=>{

         });
    })
  }


}
