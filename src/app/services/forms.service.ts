import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  url: any = "http://3.12.144.160";

  //For Registration-Component
  postRegistrationUser(bodyData) {
    console.log("test", bodyData)
    return this.http.post(this.url + '/savewholesaler', bodyData);
  }

  allWholesalerOrders(mobile) {
    return this.http.get(this.url + '/getallorders?mobile=' + mobile);
  }

  //Update WholeSaler Order Status
  //For Orderdetails-Component
  UpdateOrderStauts(data) {
    console.log("test", data)
    return this.http.post(this.url + '/updateorderstatus', data);
  }

  //Display Popup in Orders Screen
  //For Orderdetails-Component
  viewSpecifiedOrderDetails(laoid, productid) {
    console.log("test", laoid)
    console.log("test", productid)
    return this.http.get(this.url + '/getSpecifiedOrder?laoOrderId=' + laoid + '&productid=' + productid);
  }

  getAllWholesalerProducts(mobile){
    console.log("test",mobile);
    return this.http.get(this.url + '/getallwholesalerproducts?page=1&languange=en'+'&mobile='+mobile)
  }
  
  updateWholesalerProducts(data){
    console.log("test", data)
    return this.http.post(this.url + '/updatewholesalerproduct', data);
  }

  verifyRetailerEmail(email){
    console.log("test",email)
    return this.http.post(this.url + '/verifyRetaileremail', email);
  }
 
}
