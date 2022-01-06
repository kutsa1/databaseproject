import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MatDialogRef} from "@angular/material/dialog";
import {Language} from "../../models/language";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.css']
})
export class LanguageAddComponent implements OnInit {


  formGroup: FormGroup;
  addedEntity: Language

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: LanguageService,
              public dialogRef: MatDialogRef<LanguageAddComponent>,
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
