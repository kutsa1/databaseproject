import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {ThesisDetailModal} from "../models/thesisDetailModal";
import {environment} from "../../environments/environment";
import {Supervisor} from "../models/supervisor";

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private httpClient:HttpClient) { }

  getAllSupervisor():Observable<ListResponseModel<Supervisor>>{
    return this.httpClient.get<ListResponseModel<Supervisor>>(environment.apiUrl+"counselors/getall")
  }
}
