import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {ThesisDetailModal} from "../models/thesisDetailModal";
import {environment} from "../../environments/environment";
import {Topic} from "../models/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient:HttpClient) { }

  getAllTopic():Observable<ListResponseModel<Topic>>{
    return this.httpClient.get<ListResponseModel<Topic>>(environment.apiUrl+"subjecttopics/getall")
  }
}
