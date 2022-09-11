import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharactersService {

  
  constructor(private http: HttpClient) { }

  public getAllCharacters(offset) {

    return this.http.get(`${environment.urlApi}characters?offset=${offset}&ts=1&apikey=${environment.publickey}&hash=${this.getHash()}`)
      .pipe(map((data: any) => data));
  }

  public getCharacterByName(name) {
    return this.http.get(`${environment.urlApi}characters?name=${name}&ts=1&apikey=${environment.publickey}&hash=${this.getHash()}`)
    .pipe(map((data: any) => data));
  }

  public getHash() {
    const md5 = new Md5();    
    return md5.appendStr('1' + environment.privatekey + environment.publickey).end();
  }
}
