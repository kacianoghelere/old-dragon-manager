import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {
  AuthenticationService
} from '../../authentication/authentication.service';

@Injectable()
export class ModifiersService {

  protected headers: Headers;
  protected url: string = 'http://127.0.0.1:3000/api/v1';

  constructor(
    protected authService: AuthenticationService,
    protected http: Http
  ) { }

  private get options(): any {
    this.headers = this.authService.authHeaders;
    return { headers: this.headers };
  }

  private responseToJson(response: any): any {
    return response.json();
  }

  list<T>(resource: string): Observable<Array<T>> {
    return this.http.get(`${this.url}/${resource}`, this.options)
      .map(this.responseToJson);
  }

  /**
   * Groups an array by a property value
   * @param  {any[]}  orig Original data array
   * @param  {string} type Grouping property name
   * @return {any[]}       Grouped new array
   */
  getGroupedList(orig: any[], type: string): any[] {
    let newArray = [],
      types = {},
      newItem,
      current;

    for (let i = 0; i < orig.length; i++) {
      current = orig[i];
      if (!(current[type] in types)) {
        types[current[type]] = {type: current[type], values: []};
        newArray.push(types[current[type]]);
      }
      types[current[type]].values.push(current);
    }
    return newArray;
  }

  /**
   * Groups and builds a ranged list by a property from the data array
   * @param  {any[]}  orig Original data array
   * @param  {string} type Grouping property name
   * @return {any}         Range based maping object
   */
  getRangedList(orig: any[], type: string): any {
    let groupedArray = this.getGroupedList(orig, type);
    console.log("groupedArray", groupedArray);
    let rangedArray = {};

    for (let i = 0; i < groupedArray.length; i++) {
    	let group = groupedArray[i], range;

      if (group.values.length > 1) {
      	range = group.values.reduce((a,b) => {
          return `${a.value}-${b.value}`
        });
      } else {
      	range = `${group.values[0].value}`;
      }

      for (let i = 0; i < group.values.length; i++) {
        let value = group.values[i];
        value.range = range;
        rangedArray[range] = value;
      }
    }

    return rangedArray;
  }

  /**
   * Rebuild the data array to get the range of value
   * @param  {any[]}  orig Original data array
   * @param  {string} type Grouping property name
   * @return {any[]}       Processed array data
   */
  getList(orig: any[], type: string): any[] {
    let rangedArray = this.getRangedList(orig, type), list = [];
    console.log("rangedArray", rangedArray);
    for (let range in rangedArray) {
      list.push(rangedArray[range]);
    };
    return list;
  }

}
