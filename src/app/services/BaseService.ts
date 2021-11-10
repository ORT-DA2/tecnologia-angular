import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export class BaseService {
    protected get header() {
        return {
            headers: new HttpHeaders({
                accept: "application/json",
                Authorization: localStorage.getItem("token") ?? "no-autenticado",
            }),
        };
    }

    protected handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            return throwError({ mensaje: "Server is shut down" });
        } else {
            if (error.status == 400) {
                return throwError(error.error.mensaje);
            } else {
                return throwError("Server with problems");
            }
        }
    }
}