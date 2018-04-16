import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent>{

   canDeactivate(component: ProductComponent) {
       return window.confirm("路由守卫CanDeactivate演示。你还未保存，确认离开吗？");
   }
}
