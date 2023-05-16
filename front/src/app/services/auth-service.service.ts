import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //isAuthenticated: boolean = false;
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient) {
    // sessionStorage.setItem('user',JSON.stringify({
    //   id:1,
    //   email:'tesdt@gmail.com'
    // }))
    let rawUser = sessionStorage.getItem('user');
    if(rawUser){
      let user = JSON.parse(rawUser);
      if(user.id && user.email){
        this._isAuthenticated.next(true)
      }
    }
  }

  async login(email: string, password: string) {
    let res =  await lastValueFrom(this.http.post('http://localhost:5500/api/auth/login', {email, password}))
    if(res){
      sessionStorage.setItem('user',JSON.stringify(res));
      this._isAuthenticated.next(true);
      return true;
    } else {
      return false;
    }
  }

  async register(email: string, password: string, username: string) {
    let res =  await lastValueFrom(this.http.post('http://localhost:5500/api/auth/registration', {email, password, username}));
    if(res){
      sessionStorage.setItem('user',JSON.stringify(res));
      this._isAuthenticated.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('user');
    this._isAuthenticated.next(false);
  }

  getUserId(){
    let rawUser = sessionStorage.getItem('user')
    if (rawUser && this._isAuthenticated){
      return JSON.parse(rawUser).id
    } else {
      return null
    }
  }

}
