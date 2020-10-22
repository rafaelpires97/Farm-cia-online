import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbModalRef, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SoldListService} from './soldList.service';
import {ISoldList} from './soldList.model';

@Component({
  selector: 'app-soldList-list',
  templateUrl: './soldList-list.component.html',
  styleUrls: ['./soldLIst.scss'],
})
export class SoldListListComponent implements OnInit, OnDestroy {
  public soldLists: ISoldList[];
  protected ngbModalRef: NgbModalRef;

  constructor(private soldListService: SoldListService, private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.loadAll();
  }

  public ngOnDestroy(): void {
    this.ngbModalRef = null;
  }


  private loadAll(): void {
    this.soldListService.getAll().subscribe(res => {
      this.soldLists = res;
    });
  }
}
