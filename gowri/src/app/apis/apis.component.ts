import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService], // services
})
export class ApisComponent implements OnInit{
 usersList:any
 userInfo:any;
  constructor(private user:UsersService){}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.user.getUsers().subscribe((res)=>{
      //sucess --200
      console.log(res);
      this.usersList = res;
    }, (err)=>{
      // error !=200
      console.log(err);
    })
  }


  createUser(){
    this.user.createUser().subscribe((res)=>{
      this.userInfo = res;
      this.getUsersList();
    }, (err)=>{
      console.log(err);
    })
  }

  viewUser(id:number){
    this.user.getUser(id).subscribe((res)=>{
      this.userInfo = res;
    }, (err)=>{
      console.log(err);
    })
  }
  editUser(id:number){
    this.user.editUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.getUsersList();
    }, (err)=>{
      console.log(err);
    })
  }
  deleteUser(id:number){
    this.user.deleteUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.getUsersList();
    }, (err)=>{
      console.log(err);
    })
  }
}
