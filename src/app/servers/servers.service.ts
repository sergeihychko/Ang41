
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable
export class ServersService {
  constructor( private http: Http) {
  }
  storeServers(servers: any[]){
    return this.http.post('https://htracker-ad60e.firebaseio.com/', servers);
  }
}
