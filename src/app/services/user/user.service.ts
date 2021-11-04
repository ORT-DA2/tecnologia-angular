import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = `${environment.webApi_origin}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log("Llegue al servicio");
    return this.http.get<User[]>(this.endpoint).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      return throwError({mensaje:"Server is shut down"});
    }else{
      if(error.status == 400){
        return throwError(error.error.mensaje);
      }else{
        return throwError("Server with problems");
      }
    }
  }
}
