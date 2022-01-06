import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MatDialogRef} from "@angular/material/dialog";
import {UniversityService} from "../../services/university.service";
import {University} from "../../models/university";

@Component({
  selector: 'app-university-add',
  templateUrl: './university-add.component.html',
  styleUrls: ['./university-add.component.css']
})
export class UniversityAddComponent implements OnInit {

  formGroup: FormGroup;
  addedEntity: University

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: UniversityService,
              public dialogRef: MatDialogRef<UniversityAddComponent>,
  ) {
    this.formGroup = formBuilder.group({
      name: ["", Validators.required],
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
