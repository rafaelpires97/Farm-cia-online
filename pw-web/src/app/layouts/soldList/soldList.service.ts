import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

import {ISoldList} from './soldList.model';

@Injectable({providedIn: 'root'})
export class SoldListService {
  private readonly resourceUrl = environment.url + '/api/soldList';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ISoldList[]> {
    return this.http.get<ISoldList[]>(`${this.resourceUrl}/list`);
  }

  findById(id: number): Observable<ISoldList> {
    return this.http.get<ISoldList>(`${this.resourceUrl}/${id}`);
  }

}
