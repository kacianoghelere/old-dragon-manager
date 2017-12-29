import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  url: string = 'http://api.od-manager.com:3000';

  constructor() { }

}
