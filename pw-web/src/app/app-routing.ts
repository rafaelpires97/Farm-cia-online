import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './layouts/home';
import {LoginComponent} from './layouts/login';
import {ProductFormComponent, ProductListComponent, ProductResolver} from './layouts/product';
import {ClientFormComponent, ClientListComponent, ClientResolver} from './layouts/client';
import {SoldListListComponent, SoldListResolver, SoldListService} from './layouts/soldList';

import {AuthGuard} from './shared/guards';
import {ShopListComponent} from "@/layouts/product/shop";
import {ShopFormComponent} from "@/layouts/product/shop/shop-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

const productRoutes: Routes = [
  {
    path: 'product/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: 'product/:id/edit',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: 'product/:id/buy',
    component: ShopFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
];

const clientRoutes: Routes = [
  {
    path: 'client/new',
    component: ClientFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      client: ClientResolver,
    },
  },
  {
    path: 'client/:id/edit',
    component: ClientFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      client: ClientResolver,
    },
  },
  {
    path: 'client-list',
    component: ClientListComponent,
    canActivate: [AuthGuard],
  },
];

const soldListRoutes: Routes = [
  {
    path: 'sold-list',
    component: SoldListListComponent,
    canActivate: [AuthGuard],
  },
];

const shopRoutes: Routes = [
  {
    path: 'shop-list',
    component: ShopListComponent,
    canActivate: [AuthGuard],
  },
];

const otherRoutes: Routes = [
  // otherwise redirect to home - THIS MUST BE THE LAST IMPORT
  {path: '**', redirectTo: ''},
];

const ENTITY_STATES = [...routes, ...productRoutes, ...clientRoutes, ...soldListRoutes,... shopRoutes];

@NgModule({
  imports: [RouterModule.forRoot(ENTITY_STATES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
