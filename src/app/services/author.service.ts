import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {environment} from "../../environments/environment";
import {Author} from "../models/author";
import {ResponseModel} from "../models/baseModels/responseModel";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAuthor(): Observable<ListResponseModel<Author>> {
    return this.httpClient.get<ListResponseModel<Author>>(environment.apiUrl + "authors/getall")
  }

  add(entity: Author): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "authors/add", entity)
  }
}
