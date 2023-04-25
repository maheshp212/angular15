import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    let url ='https://gorest.co.in/public/v2/users';
    //let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    //return this.http.get(url, {headers: headersObj});
    return this.http.get(url);
  }
  getUser(id:number){
    let url ='https://gorest.co.in/public/v2/users/' + id;
    let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.get(url,{headers: headersObj});
  }
  createUser(){
    let url ='https://gorest.co.in/public/v2/users';
    let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    let body = {
      name: 'Gowri2',
      email:'Gowri2@angular.com',
      status: 'active',
      gender: 'male'
    }
    return this.http.post(url, body, {headers: headersObj});
  }
  editUser(id:number){
    let url ='https://gorest.co.in/public/v2/users/' + id;
    let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    let body = {
      name: 'Gowri4',
      email:'Gowri4@angular.com',
      status: 'active',
      gender: 'male'
    }
    return this.http.put(url, body, {headers: headersObj});
  }
  deleteUser(id:number){
    let url ='https://gorest.co.in/public/v2/users/' + id;
    let headersObj = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    //return this.http.delete(url, {headers: headersObj});
    return this.http.delete(url);
  }
}
