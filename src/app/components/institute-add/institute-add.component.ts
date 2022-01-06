import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MatDialogRef} from "@angular/material/dialog";
import {Institute} from "../../models/institute";
import {InstituteService} from "../../services/institute.service";
import {University} from "../../models/university";
import {UniversityService} from "../../services/university.service";

@Component({
  selector: 'app-institute-add',
  templateUrl: './institute-add.component.html',
  styleUrls: ['./institute-add.component.css']
})
export class InstituteAddComponent implements OnInit {

  formGroup: FormGroup;
  addedEntity: Institute
  universities: University[] = [];
  uni: University;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: InstituteService,
              public dialogRef: MatDialogRef<InstituteAddComponent>,
              private universityService: UniversityService,
  ) {
    this.formGroup = formBuilder.group({
      name: ["", Validators.required],
    })
  }


  ngOnInit():
    void {
    this.getAllUniversity()
  }

  getAllUniversity() {
    this.universityService.getAllUniversity().subscribe(response => {
      this.universities = response.data

    })
  }

  save() {
    if (this.formGroup.valid) {
      this.addedEntity = Object.assign({}, this.formGroup.value);
      this.addedEntity.university = this.uni;
      console.log(this.addedEntity)
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

  setuni(param: University) {
    this.uni = param;
  }
}
