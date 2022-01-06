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
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ThesisAddModel} from "../../models/thesisAddModel";
import {Keyword} from "../../models/keyword";
import {KeywordService} from "../../services/keyword.service";
import {ToastrService} from "ngx-toastr";
import {ThesisService} from "../../services/thesis.service";

@Component({
  selector: 'app-thesis-add',
  templateUrl: './thesis-add.component.html',
  styleUrls: ['./thesis-add.component.css']
})
export class ThesisAddComponent implements OnInit {

  authors: Author[] = []
  supervisors: Supervisor[] = []
  institutes: Institute[] = []
  universities: University[] = []
  languages: Language[] = []
  topics: Topic[] = []
  thesisAddForm: FormGroup;
  thesisAddModel: ThesisAddModel;
  value: string;
  keywords: Keyword[] = [];
  types: string[] = ["degree",
    "dentistry specialty",
    "doctorate",
    "expertise in medicine",
    "proficiency in the arts",
    "minor specialization in medicine",
    "specialization in pharmacy"];
  keyword: string = "";


  constructor(
    private thesisService: ThesisService,
    private toastr: ToastrService,
    private authorService: AuthorService,
    private supervisorService: SupervisorService,
    private instituteService: InstituteService,
    private universityService: UniversityService,
    private languageService: LanguageService,
    private keywordService: KeywordService,
    private topicService: TopicService,
    private formBuilder: FormBuilder
  ) {
    this.thesisAddForm = this.formBuilder.group({
      author: [{}, Validators.required],
      institute: [{}, Validators.required],
      language: [{}, Validators.required],
      university: [{}, Validators.required],
      counselors: new FormControl([], [Validators.required, Validators.max(2), Validators.min(1)]),
      subjectTopics: [[], Validators.required],
      keywords: [[]],
      title: ["", Validators.required],
      summary: ["", Validators.required],
      thesisNo: ["", Validators.required],
      year: ["", Validators.required],
      submissionDate: ["", Validators.required],
      type: ["", Validators.required],
      numberOfPages: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.getAllAuthor();
    this.getAllSupervisor();
    this.getAllUniversity();
    this.getAllLanguage();
    this.getAllTopic();
    this.getAllKeyword();
  }

  getAllKeyword() {
    this.keywordService.getAllKeyword().subscribe(response => {
      this.keywords = response.data;
    })
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


  addKeyword() {
    let addedKeyword: Keyword = {name: this.keyword, id: 0}
    if (this.keyword.toString().length < 2)
      this.toastr.info("please enter valid keyword", "error", {
        closeButton: true
      })
    else {
      this.keywordService.addKeyword(addedKeyword).subscribe(response => {
        console.log(response)
        this.keywordService.getAllKeyword().subscribe(response => {
          this.keywords = response.data;
          this.keyword = ""
        })
      })
    }
  }

  submit() {
    console.log(this.thesisAddModel)
    this.thesisAddModel = Object.assign({}, this.thesisAddForm.value);
    if (this.thesisAddForm.valid) {
      if (this.thesisAddModel.counselors.length<=2){
        console.log(this.thesisAddModel)
        this.thesisService.addThesis(this.thesisAddModel).subscribe(response => {
          if (response.success)
            this.toastr.success(response.message)
          else this.toastr.error(response.message)
        }, error => {
          this.toastr.error(error.message)
        })
      }
      else this.toastr.error("A thesis can have a maximum of 2 advisors")
    } else {
      this.toastr.warning("please fill all entire correctly")
    }
  }
}
