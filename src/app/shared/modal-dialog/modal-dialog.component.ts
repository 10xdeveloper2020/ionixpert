import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  form: FormGroup;
  title: string = "I'm working on this 😅";
  data: any;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log('modal_constructor', data);
    this.data = data;
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = this.fb.group({
      'description': ['']
    })
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
