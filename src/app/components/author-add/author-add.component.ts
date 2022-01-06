import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Author} from "../../models/author";
import {ToastrService} from "ngx-toastr";
import {AuthorService} from "../../services/author.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  formGroup: FormGroup;
  addedEntity: Author

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: AuthorService,
              public dialogRef: MatDialogRef<AuthorAddComponent>,
  ) {
    this.formGroup = formBuilder.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
    })
  }

  ngOnInit():
    void {
  }

  save() {
    if (this.formGroup.valid) {
      this.addedEntity = Object.assign({}, this.formGroup.value);
      this.http.add(this.addedEntity).subscribe(res => {
          this.toastr.success(res.message);
          this.dialogRef.close()
        },
        error => {
          this.toastr.error(error.message)
        })
    } else {
      this.toastr.warning("please enter correctly all field")
    }

  }


}
