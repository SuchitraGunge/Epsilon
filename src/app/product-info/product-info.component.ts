import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  productData: any;
  sortColumn: string;
  upImage;
  downImage;
  sortConfig;
  sortOrder;
  constructor(private procuctService: ProductService) {
    this.sortColumn = 'name';
    this.productData = [];
    this.downImage = './assets/images/triangle-down-512.png';
    this.upImage = './assets/images/triangle-up-512.png';
    this.sortOrder = 'dec';
    this.sortConfig = [{ 'columnName': 'Product Name', 'columnOrder': 'dec', 'orderBy': 'name' },
    { 'columnName': 'Price', 'columnOrder': 'dec', 'orderBy': 'price' },
    { 'columnName': 'Category', 'columnOrder': 'dec', 'orderBy': 'category' }
    ];
  }

  ngOnInit() {
    // to get the data from service
    this.procuctService.getData().subscribe((data) => {
      if (data) {
        this.productData = data;
      }
      console.log(this.productData);
    });
  }

  /*
   * function to set the selected column information and orderby info
   */
  setSortColumn(columnInfo) {
    this.sortConfig.forEach(element => {
      if (element.columnName === columnInfo.columnName) {
        element.columnOrder = element.columnOrder === 'asc' ? 'dec' : 'asc';
        this.sortOrder = element.columnOrder;
      } else {
        element.columnOrder = 'dec';

      }
    });
    this.sortColumn = columnInfo.orderBy;

  }

}
