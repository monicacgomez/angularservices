import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicesPersonas {
    // Debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) {}

    // Tenemos 2 opciones para trabajar
    // Devolver la petición o devolver una promesa
    // Devolver la petición a la llamada utilizado Observable
    getPersonas(): Observable<any> {
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);
    }
}