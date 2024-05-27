import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit{

  UserData:any =[];


  constructor(
    private navigationService: NavigationService,
    public utilityService: UtilityService,
  ){}

  ngOnInit(): void {

    this.navigationService.getAllUserData().subscribe((data) => {
     this.UserData=data;
     console.log(data);
  });
  
  }
  
  getUserDetails(){
    this.navigationService.getAllUserData()
  }
  block(){}

}
