import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {isNullOrUndefined} from 'util';
import {IProduct} from "@/layouts/product/product.model";
import {ProductService} from "@/layouts/product";



@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop.scss'],
})
export class ShopFormComponent implements OnInit, OnDestroy {
  public product: IProduct;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(protected activatedRoute: ActivatedRoute, private productService: ProductService, private toastr: ToastrService) {}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({product}) => {
      this.product = product;
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public buyProduct(): void {
      this.productService.update(this.product).subscribe(
        res => {
          this.product = res;
          this.saveSucess();
        },
        error => {
          this.throwError();
        }
      );
  }


  private saveSucess(): void {
    this.toastr.success('Information saved successfully', 'Sucess');
  }

  private throwError(): void {
    this.toastr.error('An error occurred on the system. Please contact the system administrator ', 'Error');
  }
}
