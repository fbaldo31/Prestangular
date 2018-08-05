import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class OrderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OrderModule,
      providers: [
        OrderService
      ],
    };
  }
}
