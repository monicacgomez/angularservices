import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coche } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable ()
export class ServiceCoches {
    constructor(private _http: HttpClient) {}

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}