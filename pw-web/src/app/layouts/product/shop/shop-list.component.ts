import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbModalRef, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IProduct} from "@/layouts/product/product.model";
import {ProductService} from "@/layouts/product";


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop.scss'],
})
export class ShopListComponent implements OnInit, OnDestroy {
  public products: IProduct[];
  protected ngbModalRef: NgbModalRef;

  constructor(private productService: ProductService, private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.loadAll();
  }

  public ngOnDestroy(): void {
    this.ngbModalRef = null;
  }


  private loadAll(): void {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    });
  }
}
