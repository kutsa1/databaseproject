import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ThesisService} from "../../../services/thesis.service";
import {ThesisDeleteModel} from "../../../models/thesisDeleteModel";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private thesisService: ThesisService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ThesisDeleteModel
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  Ok(data: ThesisDeleteModel) {
    this.thesisService.delete(data).subscribe(response => {
      this.toastr.info(`${data.title} Deleted`)
    })
  }
}
