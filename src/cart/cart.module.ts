import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class CartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CartModule,
      providers: [
        CartService
      ],
    };
  }
}
