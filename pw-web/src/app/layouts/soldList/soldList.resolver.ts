import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {SoldListService} from './soldList.service';
import {ISoldList, SoldList} from './soldList.model';

@Injectable({providedIn: 'root'})
export class SoldListResolver implements Resolve<ISoldList> {
  constructor(private service: SoldList) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISoldList> {
    const id = route.params['id'] ? route.params['id'] : null;
    //if (id) {
      //return this.service.findById(id).pipe(map(soldList => soldList));
    //}
    return null;
  }
}
