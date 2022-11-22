import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList:any=[]

  searchTerm =""
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getuserList()
    .subscribe((result)=>{
      this.userList = Object.values(result)[0];

      console.log(this.userList);
      
    } )

        // to get search term from api service
        this.apiService.search.subscribe((data)=>{
          console.log(data);
          this.searchTerm = data
          
        })
    

    


  }

}
