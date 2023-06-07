import { HttpClient, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
 
  getUser = (nb: number): Observable<any> => {
    const params = new HttpParams().set('results', nb).set('nat', 'gb');
    return this.http.get('https://randomuser.me/api/', { params: params });
  };
}