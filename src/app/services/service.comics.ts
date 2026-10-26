import{ Injectable } from "@angular/core";
import { Comic } from "../models/comic";
@Injectable()

export class ServiceComics {
    getComics(): Promise<Array<Comic>> {
        let path = 'assets/comic.json';
        return fetch(path).then(response => response.json())
        .then((data: any[]) => {
            let arrayComics= [];
            for (let elem of data){
                let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
 
                arrayComics.push(comic);
            }
            console.log(arrayComics)
            return arrayComics;
        })
        
  }
  async getComicsAsync(): Promise<Array<Comic>> {
    let path = "./assets/comics.json";
    let response = await fetch(path);
    let data = await response.json();
    let arrayComics: Array<Comic> = [];
    for (let elem of data){
        let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        
        arrayComics.push(comic);
    }
    console.log(arrayComics)
    return arrayComics;
}
}