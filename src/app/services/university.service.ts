import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {environment} from "../../environments/environment";
import {University} from "../models/university";
import {ResponseModel} from "../models/baseModels/responseModel";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUniversity(): Observable<ListResponseModel<University>> {
    return this.httpClient.get<ListResponseModel<University>>(environment.apiUrl + "universities/getall")
  }

  add(entity: University): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "universities/add", entity)
  }
}
