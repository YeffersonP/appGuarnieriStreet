import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Localizacao {
  latitude:   number,
  longitude:  number,
  idusuario:  number,
  horario:    Date,
  nome:       string
}

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {
  private URL = "https://etecsalesgomespam-default-rtdb.firebaseio.com/localizacao.json"

  constructor(private http: HttpClient) {  }

  inserir(localizacao: Localizacao): Observable<Localizacao> {
    return this.http.post<Localizacao>(this.URL, localizacao);
  }
}
