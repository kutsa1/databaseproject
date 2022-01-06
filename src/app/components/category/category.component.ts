import {Component, OnInit} from '@angular/core';
import {Author} from "../../models/author";
import {Supervisor} from "../../models/supervisor";
import {Institute} from "../../models/institute";
import {University} from "../../models/university";
import {Language} from "../../models/language";
import {Topic} from "../../models/topic";
import {AuthorService} from "../../services/author.service";
import {SupervisorService} from "../../services/supervisor.service";
import {InstituteService} from "../../services/institute.service";
import {UniversityService} from "../../services/university.service";
import {LanguageService} from "../../services/language.service";
import {TopicService} from "../../services/topic.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
  ];

  authors: Author[] = []
  supervisors: Supervisor[] = []
  institutes: Institute[] = []
  universities: University[] = []
  languages: Language[] = []
  topics: Topic[] = []


  constructor(
    private authorService: AuthorService,
    private supervisorService: SupervisorService,
    private instituteService: InstituteService,
    private universityService: UniversityService,
    private languageService: LanguageService,
    private topicService: TopicService
  ) {
  }

  ngOnInit(): void {
    this.getAllAuthor();
    this.getAllSupervisor();
    this.getAllUniversity();
    this.getAllLanguage();
    this.getAllTopic();
  }

  getAllAuthor() {
    this.authorService.getAllAuthor().subscribe(response => {
      this.authors = response.data

    })
  }

  getAllSupervisor() {
    this.supervisorService.getAllSupervisor().subscribe(response => {
      this.supervisors = response.data

    })
  }

  getAllInstitute() {
    this.instituteService.getAllInstitute().subscribe(response => {
      this.institutes = response.data

    })
  }

  getAllInstituteByUniId(uniId: number) {
    if (uniId === 0)
      this.institutes = []
    this.instituteService.getAllInstituteByUniId(uniId).subscribe(response => {
      this.institutes = response.data
    })
  }

  getAllUniversity() {
    this.universityService.getAllUniversity().subscribe(response => {
      this.universities = response.data

    })
  }

  getAllTopic() {
    this.topicService.getAllTopic().subscribe(response => {
      this.topics = response.data

    })
  }

  getAllLanguage() {
    this.languageService.getAllLanguage().subscribe(response => {
      this.languages = response.data
    })
  }

}
