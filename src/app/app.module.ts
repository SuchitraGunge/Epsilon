import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SortData } from './Directive/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    SortData
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
