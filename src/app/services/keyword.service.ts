import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {environment} from "../../environments/environment";
import {Keyword} from "../models/keyword";
import {ResponseModel} from "../models/baseModels/responseModel";
import {Author} from "../models/author";

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private httpClient: HttpClient) {
  }

  getAllKeyword(): Observable<ListResponseModel<Keyword>> {
    return this.httpClient.get<ListResponseModel<Keyword>>(environment.apiUrl + "keywords/getall")
  }

  addKeyword(keyword: Keyword): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "keywords/add", keyword);
  }
  add(entity: Keyword): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "keywords/add", entity)
  }
}
