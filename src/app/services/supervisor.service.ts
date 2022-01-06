import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {ThesisDetailModal} from "../models/thesisDetailModal";
import {environment} from "../../environments/environment";
import {Supervisor} from "../models/supervisor";
import {Author} from "../models/author";
import {ResponseModel} from "../models/baseModels/responseModel";

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private httpClient:HttpClient) { }

  getAllSupervisor():Observable<ListResponseModel<Supervisor>>{
    return this.httpClient.get<ListResponseModel<Supervisor>>(environment.apiUrl+"counselors/getall")
  }
  add(entity: Supervisor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "counselors/add", entity)
  }
}
