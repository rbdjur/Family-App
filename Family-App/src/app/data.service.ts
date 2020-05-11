import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  dataArray = [];
  dataJson;

  getData() {
    return this.http.get('http://localhost:8080/api/square');
  }

  postData() {
    const data = 'test';
    return this.http.post('http://localhost:8080/signup', data);
  }

  convertJsontoArray(jsondata) {
    this.dataJson = jsondata.data;
    for (const iterant of this.dataJson) {
      this.dataArray.push(iterant);
    }
    // console.log('final array with an index of n family members', this.dataArray);
    return this.dataArray;
  }

  emptyArray() {
    const jsondata = [];
    this.dataJson = jsondata;
    // console.log('emptyArray() - this.dataJson should be empty', this.dataJson);
    // console.log('this.dataJson should be empty', this.dataJson);
    return this.dataJson;
  }
}
