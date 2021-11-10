import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { BaseService } from '../BaseService';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  endpoint = `${environment.webApi_origin}/users`;

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    console.log("Llegue al servicio");
    return this.http.get<User[]>(this.endpoint).pipe(catchError(super.handleError));
  }

  createUser(): Observable<any> {
    return this.http.post<any>(this.endpoint, { algo: "hola" }, super.header).pipe(catchError(super.handleError));
  }
}
