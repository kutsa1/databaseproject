import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {environment} from "../../environments/environment";
import {Institute} from "../models/institute";

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private httpClient: HttpClient) {
  }

  getAllInstitute(): Observable<ListResponseModel<Institute>> {
    return this.httpClient.get<ListResponseModel<Institute>>(environment.apiUrl + "institutes/getall")
  }

  getAllInstituteByUniId(uniId: number): Observable<ListResponseModel<Institute>> {
    return this.httpClient.get<ListResponseModel<Institute>>(environment.apiUrl + `institutes/getbyuniversityid?universityId=${uniId}`)
  }
}
