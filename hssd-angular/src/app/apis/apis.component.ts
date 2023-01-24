import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit{
  constructor(private users:UsersService){}
  usersList : any = [];
  userInfo:any;
  ngOnInit(): void {
   this.getUsers();
  }
  getUsers(){
    this.users.usersList().subscribe((resp)=>{
      //success
      console.log(resp);
      this.usersList = resp;
    }, (err)=>{
      //failure
      console.log(err);
    })
  }

  addUser(){
    this.users.createUser().subscribe((resp)=>{
      //success
      this.userInfo = resp;
    }, (err)=>{
      //failure
      console.log(err);
    })
  }

  viewUser(id:number){
    this.users.viewUser(id).subscribe((resp)=>{
      //success
      this.userInfo = resp;
    }, (err)=>{
      //failure
      console.log(err);
    })
  }
  editUser(id:number){
    this.users.editUser(id).subscribe((resp)=>{
      //success
      this.userInfo = resp;
      this.getUsers();  
    }, (err)=>{
      //failure
      console.log(err);
    })
  }
  deleteUser(id:number){
    this.users.deleteUser(id).subscribe((resp)=>{
      //success
      this.userInfo = resp;
      this.getUsers();  
    }, (err)=>{
      //failure
      console.log(err);
    })
  }
}
