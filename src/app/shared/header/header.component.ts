import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { SharedVarService } from 'src/app/services/shared-var.service';
import { Lang } from '../../models/lang';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('menuRoutes') menuRoutes = [];
  cart: Lang[];
  cartCount: number;
  constructor(private sharedVarService: SharedVarService, private dialog: MatDialog) { }

  ngOnInit() {
    this.sharedVarService.getCart().subscribe((res) => {
      this.cart = res;
      this.cartCount = res.length;
    })
  }

  vibrate() {
    navigator.vibrate(1000);
  }

  showCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.cart;
    // this.dialog.open(ModalDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(ModalDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }
}
