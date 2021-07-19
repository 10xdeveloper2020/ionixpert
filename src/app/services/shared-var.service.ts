import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lang } from '../models/lang';

@Injectable({
  providedIn: 'root'
})
export class SharedVarService {
  private cart: BehaviorSubject<Lang[]>;

  constructor() {
    this.cart = new BehaviorSubject<Lang[]>([]);
  }

  setCart(newCart: Lang[]): void {
    this.cart.next(newCart);
  }

  getCart(): Observable<Lang[]> {
    return this.cart.asObservable();
  }

  addToCart(newLang: Lang): void {
    let updatedCart = [...this.cart.getValue(), newLang];
    this.setCart(updatedCart);

  }

  removeFromCart(name: string) {
    let updatedCart = this.cart.getValue().filter(lang => lang.name !== name);
    this.setCart(updatedCart);
  }

  isLangExist(name): boolean {
    return this.cart.getValue().findIndex(lang => lang.name === name) >= 0;
  }

  toggleLangToCart(newLang: Lang): void {
    if (!this.isLangExist(newLang.name)) {
      let updatedCart = [...this.cart.getValue(), newLang];
      this.setCart(updatedCart);
    } else {
      this.removeFromCart(newLang.name);
    }
  }
}
