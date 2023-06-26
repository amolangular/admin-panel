import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  
  constructor() { }

  isLoggened(){
   const res = sessionStorage.getItem("flag");
   console.log("res",res == 'true');
   return true;
  }
}
