import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Router }                                  from '@angular/router';

import { IShoppingCartItem } from '../../../../models';

@Component({
    selector: 'shopping-cart-item',
    templateUrl: 'shopping-cart-item.component.html',
    styleUrls: [
        'shopping-cart-item.component.css'
    ],
    providers: []
})
export class ShoppingCartItemComponent {

    @Input() public item: IShoppingCartItem;

    @Output() public remove = new EventEmitter<IShoppingCartItem>();
    @Output() public quantityChange = new EventEmitter<IShoppingCartItem>();

    constructor(private router: Router){

    }

    public removeFromCart(): void {
        if (confirm("Are you sure that you want to remove it from cart?")) {
            this.remove.emit(this.item);
        }
    }

    public changeQuantity(newQuantity: number): void {
        this.quantityChange.emit({product: this.item.product, quantity: newQuantity});
    }

    public preview(id: number): void {
        this.router.navigate(['/catalog', id]);
    }
}

