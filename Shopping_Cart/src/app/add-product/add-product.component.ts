import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { Category } from '../models/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  addproductForm!: FormGroup;
  selectedCategoryName = '';
  selectedCategory = new FormControl('0');

  category: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    this.addproductForm = this.fb.group({
      productname: [''],
      description: [''],
      category: [''],
      subcategory: [''],
      originalprice: [''],
      offerprecentage: [''],
      specialprice: [''],
      img1: [''],
      img2: [''],
      img3: [''],
      img4: [''],
      img5: [''],

    })
    // Get Category 

    this.navigationService.getCategory().subscribe((res) => {
      this.category = res;
      console.log(res);
    });


    this.selectedCategory.valueChanges.subscribe((res: any) => {
      if (res === '0') this.selectedCategoryName = '';
      else this.selectedCategoryName = res.toString();
    });
  }

  specialprice()
  {

  }

//  //#region Getters
get ProductName(): FormControl {
  return this.addproductForm.get('productname') as FormControl;
}
get ProductDescription(): FormControl {
  return this.addproductForm.get('description') as FormControl;
}
get Category(): FormControl {
  return this.addproductForm.get('category') as FormControl;
}
get SubCategory(): FormControl {
  return this.addproductForm.get('subcategory') as FormControl;
}
get OriginalPrice(): FormControl {
  return this.addproductForm.get('originalprice') as FormControl;
}
get OfferPrecentage(): FormControl {
  return this.addproductForm.get('offerprecentage') as FormControl;
}
get SpecialPrice(): FormControl {
  return this.addproductForm.get('specialprice') as FormControl;
}
get Image1(): FormControl {
  return this.addproductForm.get('img1') as FormControl;
}
get Image2(): FormControl {
  return this.addproductForm.get('img2') as FormControl;
}
get Image3(): FormControl {
  return this.addproductForm.get('img3') as FormControl;
}
get Image4(): FormControl {
  return this.addproductForm.get('img4') as FormControl;
}
get Image5(): FormControl {
  return this.addproductForm.get('img5') as FormControl;
}
// //#endregion

}


