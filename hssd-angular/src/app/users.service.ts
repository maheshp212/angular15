import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  // 5 API's
  usersList(){
    let url = 'https://gorest.co.in/public/v2/users';
    const headers = { 'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.get(url, {headers: headers});
  }

  viewUser(id:number){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    return this.http.get(url);
  }
  createUser(){
    let url = 'https://gorest.co.in/public/v2/users/';
    let body = {
      name: 'dinesh sai',
      gender: 'male',
      email: 'dinesh.sa222i@angular.com',
      status: 'active'
    }
    const headers = { 'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.post(url, body, {headers: headers});

  }
  editUser(id:number){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    let body = {
      id: id,
      name: 'dinesh sai',
      gender: 'male',
      email: 'dinesh.sa2i@angular.com',
      status: 'active'
    }
    const headers = { 'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.put(url, body, {headers: headers});

  }
  deleteUser(id:number){
    let url = 'https://gorest.co.in/public/v2/users/'+id;
    const headers = { 'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.delete(url, {headers: headers});
  }
}
