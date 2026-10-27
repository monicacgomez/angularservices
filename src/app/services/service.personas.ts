import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";

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

    getPersonasPromise(): Promise<any> {
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise = new Promise((resolve) => {
            // Aquí leemos la petición extrayendo los datos a la vez
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }
}