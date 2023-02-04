import { Component,Directive, Input, Output, EventEmitter, ViewChildren,QueryList, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

import { map, startWith } from 'rxjs/operators';
interface Country {
	id: number;
	name: string;
	email: string;
}
export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}


function search(text: string, usersList:any): any {
  console.log('hello');
	return usersList.filter((user:any) => {
		const term = text.toLowerCase();
		return (
			user.name.toLowerCase().includes(term) ||
			user.email.toLowerCase().includes(term)
		);
	});
}


@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit{
 
  usersList : any = [];
  usersListMain : any = [];
  userInfo:any;
  searchStr:string = ''
  constructor(private users:UsersService) {
		
	}

  ngOnInit(): void {
   this.getUsers();
  }


	@ViewChildren(NgbdSortableHeader) headers: any;
	//@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header:any) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.usersList = this.usersListMain;
		} else {
			this.usersList = [...this.usersListMain].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}



  filter(){
    console.log('filter')
    if(this.searchStr){
    this.usersList =  this.usersListMain.filter((user:any) => {
      const term = this.searchStr.toLowerCase();
      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    });
  } else {
    this.usersList = this.usersListMain;
  }

  }



  getUsers(){
    this.users.usersList().subscribe((resp)=>{
      //success
      console.log(resp);
      this.usersList = JSON.parse(JSON.stringify(resp));
      this.usersListMain = JSON.parse(JSON.stringify(resp));
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
