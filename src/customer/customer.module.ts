import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class CustomerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomerModule,
      providers: [
        CustomerService
      ],
    };
  }
}
