import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import {
  Category,
  Order,
  Payment,
  PaymentMethod,
  Products,
  User,
} from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  constructor(private http: HttpClient) {}

  getCategoryList() {
    let url = environment.baseurl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subCategory: category.subCategory,
          };
          return mappedCategory;
        })
      )
    );
  }

  getProducts(category: string, subcategory: string, count: number) {
    return this.http.get<any[]>(environment.baseurl + 'GetProducts', {
      params: new HttpParams()
        .set('category', category)
        .set('subcategory', subcategory)
        .set('count', count),
    });
  }

  getProduct(id: number) {
    let url = environment.baseurl + 'GetProduct/' + id;
    return this.http.get(url);
  }

  registerUser(user: User) {
    let url = environment.baseurl + 'RegisterUser';
    return this.http.post(url, user, { responseType: 'text' });
  }

  login(email: string, password: string) {
    let url = environment.baseurl + 'Login';
    return this.http.post(
      url,
      { Email: email, Password: password },
      { responseType: 'text' }
    );
  }

  submitReview(userid: number, productid: number, review: string) {
    let obj: any = {
      User: {
        Id: userid,
      },
      Product: {
        Id: productid,
      },
      Value: review,
    };

    let url = environment.baseurl + 'InsertReview';
    return this.http.post(url, obj, { responseType: 'text' });
  }

  getAllReviewsOfProduct(productId: number) {
    let url = environment.baseurl + 'GetProductReviews/' + productId;
    return this.http.get(url);
  }

  addToCart(userid: number, productid: number) {
    let url = environment.baseurl + 'InsertCartItem/' + userid + '/' + productid;
    return this.http.post(url, null, { responseType: 'text' });
  }

  removefromCart(userid: number, productid: number){
    let url = environment.baseurl + 'DeleteCartItem/' + userid + '/' + productid;
    return this.http.post(url, null, { responseType: 'text' });
  }


  getActiveCartOfUser(userid: number) {
    let url = environment.baseurl + 'GetActiveCartOfUser/' + userid;
    return this.http.get(url);
  }

  getAllPreviousCarts(userid: number) {
    let url = environment.baseurl + 'GetAllPreviousCartsOfUser/' + userid;
    return this.http.get(url);
  }

  getPaymentMethods() {
    let url = environment.baseurl + 'GetPaymentMethods';
    return this.http.get<PaymentMethod[]>(url);
  }

  insertPayment(payment: Payment) {
    return this.http.post(environment.baseurl + 'InsertPayment', payment, {
      responseType: 'text',
    });
  }

  insertOrder(order: Order) {
    return this.http.post(environment.baseurl + 'InsertOrder', order);
  }

  getAllUserData(){
    
      let url = environment.baseurl + 'getAllUserData';
      return this.http.get<any[]>(url).pipe(
        map((user) =>
        user.map((user) => {
            let mappedUser: User = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              address: user.address,
              mobile: user.mobile,
              createdAt: user.createdAt,
              password: '',
              modifiedAt: '',
              usertype: user.userType,
              status: user.status,
            };
            return mappedUser;
          })
        )
      );
    }

    GetAllProductsData(){
    
      let url = environment.baseurl + 'GetAllProductsData';
      return this.http.get<any[]>(url).pipe(
        map((products) =>
          products.map((product) => {
            let mappedProduct: Products = {
              id: product.id,
              title: product.title,
              description: product.description,
              categoryId: product.categoryId,
              offerId: product.offerId,
              price: product.price,
              quantity: product.quantity,
              
            };
            return mappedProduct;
          })
        )
      );
    }
  
  blockUser(userid: number){
      let url = environment.baseurl + 'BlockUser/' + userid ;
      return this.http.post(url, null, { responseType: 'text' });
    }

  unblockUser(userid: number){
      let url = environment.baseurl + 'UnblockUser/' + userid ;
      return this.http.post(url, null, { responseType: 'text' });
    }

  getCategory() {
      let url = environment.baseurl + 'GetCategoryList';
      return this.http.get<Category[]>(url);
    }

    


}
