import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class CatalogModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CatalogModule,
      providers: [
        ProductService,
        CategoryService
      ],
    };
  }
}
