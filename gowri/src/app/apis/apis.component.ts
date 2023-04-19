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

}
