import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit{

  ProductData:any =[];


  constructor(
    private navigationService: NavigationService,
    public utilityService: UtilityService,
  ){}

  ngOnInit(): void {

    this.navigationService.GetAllProductsData().subscribe((data) => {
     this.ProductData=data;
     console.log(data);
  });
  
  }
  
  getProductDetails(){
    this.navigationService.GetAllProductsData()
  }
  block(){}

}
