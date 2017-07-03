import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MyserviceService {

  private geturl = 'https://595a60255b35140011e05a4c.mockapi.io/api/person/';
  constructor(private _http: Http) { }

  // phương thức này trả về một đối tượng Observable<>
  getlist(): Observable<any[]> {
    return this._http.get(this.geturl).map((respon: Response) => respon.json());
  }
  getid(id: number): Observable<any> {
    return this._http.get(this.geturl + id).map((response: Response) => response.json())
  }

  update(id: number, data: any): Observable<any> {
    return this._http.put(this.geturl + id, data).map((respon: Response) => respon.json());
  }
  delete(id: number): Observable<any> {
    return this._http.delete(this.geturl + id).map((respon: Response) => respon.json());
  }
  add(data: any): Observable<any> {
    return this._http.post(this.geturl, data).map((respon: Response) => respon.json());
  }

  search(key: string): Observable<any[]> {
    return this._http.get(this.geturl + '?search=' + key).map((respon: Response) => respon.json());
  }
}

