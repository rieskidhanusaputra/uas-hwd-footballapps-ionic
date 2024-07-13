import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private url =
    'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
