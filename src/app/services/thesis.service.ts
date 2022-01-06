import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/baseModels/listResponseModel";
import {ThesisDetailModal} from "../models/thesisDetailModal";
import {environment} from "../../environments/environment";
import {ThesisAddModel} from "../models/thesisAddModel";
import {ResponseModel} from "../models/baseModels/responseModel";
import {ThesisDeleteModel} from "../models/thesisDeleteModel";
import {SingleResponseModel} from "../models/baseModels/singleResponseModel";
import {ThesisUpdateModel} from "../models/thesisUpdateModel";

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  constructor(private httpClient: HttpClient) {
  }

  getAllThesisDetail(): Observable<ListResponseModel<ThesisDetailModal>> {
    return this.httpClient.get<ListResponseModel<ThesisDetailModal>>(environment.apiUrl + "theses/getthesisdetaildto")
  }

  addThesis(thesis: ThesisAddModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "theses/add", thesis);
  }

  delete(thesisDeleteModel: ThesisDeleteModel) {
    return this.httpClient.post(environment.apiUrl + "theses/delete", thesisDeleteModel)
  }

  getById(id: number): Observable<SingleResponseModel<ThesisUpdateModel>> {
    return this.httpClient.get<SingleResponseModel<ThesisUpdateModel>>(environment.apiUrl + `theses/getbyid?id=${id}`)
  }

  update(thesisUpdateModel: ThesisUpdateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "theses/update", thesisUpdateModel);
  }
}
