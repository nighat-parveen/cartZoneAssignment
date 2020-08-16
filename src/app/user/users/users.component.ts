import { api_url } from './../../../../app.constant';
import { User } from './../../core/models/User.model';
import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  test: any;
  searchData: string;
  listedCounter = 5;
  pageCount: number = 1;
  // currentPage: number = 1;
  to: number;
  from: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  

  getUsers(){
     const url = api_url.users;
     this.apiService.getRequset(url).
     subscribe((data: User[]) => {
       this.users = data.map(item => new User(item));
        this.test = this.users.length ? this.paginateData(1) : [];
        this.pageCount = this.users.length ? Math.ceil(this.users.length / 5) : 1;
      });
  }

  searchItem(data: any){
    this.searchData = data;
  }


  changedPageNumber(val: number){
    // this.currentPage = val;
    this.test = this.paginateData(val);
    
  }

  // will make generic too so that no need to add calc

  paginateData(val: number){
   this.to = (this.listedCounter*val)-this.listedCounter;
   this.from = this.listedCounter*val
    return this.users.slice(this.to,  this.from);
    
  }



}
