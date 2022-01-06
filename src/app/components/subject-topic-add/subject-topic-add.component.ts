import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Language} from "../../models/language";
import {ToastrService} from "ngx-toastr";
import {LanguageService} from "../../services/language.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Topic} from "../../models/topic";
import {TopicService} from "../../services/topic.service";

@Component({
  selector: 'app-subject-topic-add',
  templateUrl: './subject-topic-add.component.html',
  styleUrls: ['./subject-topic-add.component.css']
})
export class SubjectTopicAddComponent implements OnInit {

  formGroup: FormGroup;
  addedEntity: Topic

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: TopicService,
              public dialogRef: MatDialogRef<SubjectTopicAddComponent>,
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
