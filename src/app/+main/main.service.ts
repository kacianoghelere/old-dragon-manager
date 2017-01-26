import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class MainService {

  protected headers: Headers;
  protected url: string = 'http://localhost:3000/api/v1';

  constructor(
    protected authService: AuthenticationService,
    protected http: Http
  ) {
    this.headers = this.authService.authHeaders;
  }

  private get options(): any {
    return { headers: this.headers };
  }

  protected responseToJson(response: any): any {
    return response.json();
  }

  protected _create(resource: string) {
    return (params: any): Observable<any> => {
      let _params = JSON.stringify(params);
      return this.http.put(`${this.url}/${resource}`, _params, this.options)
        .map(this.responseToJson);
    }
  }

  protected _destroy(resource: string) {
    return (id: any): Observable<any> => {
      return this.http.delete(`${this.url}/${resource}/${id}`, this.options)
        .map(this.responseToJson);
    }
  }

  protected _find(resource: string) {
    return (id: any): Observable<any> => {
      return this.http.get(`${this.url}/${resource}/${id}`, this.options)
        .map(this.responseToJson);
    }
  }

  protected _list(resource: string) {
    return (): Observable<any> => {
      return this.http.get(`${this.url}/${resource}`, this.options)
        .map(this.responseToJson);
    }
  }

  protected _update(resource: string) {
    return (id: any, params: any): Observable<any> => {
      let _params = JSON.stringify(params);
      return this.http.put(`${this.url}/${resource}/${id}`, _params, this.options)
        .map(this.responseToJson);
    }
  }
}
