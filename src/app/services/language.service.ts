import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {ThesisDetailModal} from "../models/thesisDetailModal";
import {environment} from "../../environments/environment";
import {Language} from "../models/language";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClient) { }

  getAllLanguage():Observable<ListResponseModel<Language>>{
    return this.httpClient.get<ListResponseModel<Language>>(environment.apiUrl+"languages/getall")
  }
}
