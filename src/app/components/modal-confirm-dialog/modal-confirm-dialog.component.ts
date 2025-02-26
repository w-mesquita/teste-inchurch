import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import { CircleAlert, CircleCheck, LucideAngularModule, TriangleAlert, X } from "lucide-angular";
import { IModalConfirmation } from '../../models/modal-confirmation.model';

@Component({
  selector: 'app-modal-confirm-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    LucideAngularModule,
  ],
  templateUrl: './modal-confirm-dialog.component.html',
  styleUrl: './modal-confirm-dialog.component.scss'
})
export class ModalConfirmDialogComponent implements OnInit{
  readonly dialogRef = inject(MatDialogRef<ModalConfirmDialogComponent>);
  readonly data: IModalConfirmation = inject(MAT_DIALOG_DATA);
  readonly X = X;
  readonly CircleAlert = CircleAlert;
  readonly TriangleAlert = TriangleAlert;
  readonly CircleCheck = CircleCheck;
  titleIcon: any = undefined;

  ngOnInit(): void {
    switch(this.data.actionType){
      case 'alert': this.titleIcon = this.CircleAlert
      break
      case 'warning' : this.titleIcon = this.TriangleAlert
      break
      case 'success' : this.titleIcon = this.CircleCheck
    }
  }

  handleConfirm() {
    this.dialogRef.close(true);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
