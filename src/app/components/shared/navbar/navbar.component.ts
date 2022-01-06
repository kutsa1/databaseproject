import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UniversityAddComponent} from "../../university-add/university-add.component";
import {InstituteAddComponent} from "../../institute-add/institute-add.component";
import {AuthorAddComponent} from "../../author-add/author-add.component";
import {SubjectTopicAddComponent} from "../../subject-topic-add/subject-topic-add.component";
import {LanguageAddComponent} from "../../language-add/language-add.component";
import {SupervisorAddComponent} from "../../supervisor-add/supervisor-add.component";
import {AuthorService} from "../../../services/author.service";
import {SupervisorService} from "../../../services/supervisor.service";
import {InstituteService} from "../../../services/institute.service";
import {UniversityService} from "../../../services/university.service";
import {LanguageService} from "../../../services/language.service";
import {TopicService} from "../../../services/topic.service";
import {FilterText} from "../../../models/filterText";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filterText = FilterText


  constructor(private authorService: AuthorService,
              private supervisorService: SupervisorService,
              private instituteService: InstituteService,
              private universityService: UniversityService,
              private languageService: LanguageService,
              private topicService: TopicService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  addinsti() {
    const dialogRef = this.dialog.open(InstituteAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.authorService.getAllAuthor()
    });
  }

  adduni() {
    const dialogRef = this.dialog.open(UniversityAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.universityService.getAllUniversity()
    });
  }

  addauthor() {
    const dialogRef = this.dialog.open(AuthorAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.authorService.getAllAuthor()
    });
  }

  addsubject() {
    const dialogRef = this.dialog.open(SubjectTopicAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.topicService.getAllTopic()
    });
  }

  addlanguage() {
    const dialogRef = this.dialog.open(LanguageAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.languageService.getAllLanguage()
    });
  }

  addsupervisor() {
    const dialogRef = this.dialog.open(SupervisorAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.supervisorService.getAllSupervisor()
    });
  }

  onChange() {

  }
}
