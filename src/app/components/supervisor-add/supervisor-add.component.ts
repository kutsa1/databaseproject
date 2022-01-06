import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MatDialogRef} from "@angular/material/dialog";
import {SupervisorService} from "../../services/supervisor.service";
import {Supervisor} from "../../models/supervisor";

@Component({
  selector: 'app-supervisor-add',
  templateUrl: './supervisor-add.component.html',
  styleUrls: ['./supervisor-add.component.css']
})
export class SupervisorAddComponent implements OnInit {

  formGroup: FormGroup;
  addedEntity: Supervisor

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: SupervisorService,
              public dialogRef: MatDialogRef<SupervisorAddComponent>,
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
