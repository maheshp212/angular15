import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    let url ='https://gorest.co.in/public/v2/users';
    let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.get(url);
  }
  getUser(){
    let url =''
    return this.http.get(url);
  }
  createUser(){
    let url =''
    return this.http.post(url, {});
  }
  editUser(){
    let url =''
    return this.http.put(url, {});
  }
  deleteUser(){
    let url =''
    return this.http.delete(url);
  }
}
