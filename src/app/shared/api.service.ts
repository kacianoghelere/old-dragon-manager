import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  url: string = 'http://127.0.0.1:3000/api/v1';

  constructor() { }

}
