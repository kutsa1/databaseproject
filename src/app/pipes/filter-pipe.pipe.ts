import {Pipe, PipeTransform} from '@angular/core';
import {ThesisDetailModal} from "../models/thesisDetailModal";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ThesisDetailModal[], filter: string): ThesisDetailModal[] {
    filter = filter ? filter.toLocaleLowerCase() : "";
    return filter ? value.filter((t: ThesisDetailModal) => t.title.toLocaleLowerCase().indexOf(filter) !== -1 || t.university.toLocaleLowerCase().indexOf(filter) !== -1 || t.author.toLocaleLowerCase().indexOf(filter) !== -1 || t.institute.toLocaleLowerCase().indexOf(filter) !== -1 || t.language.toLocaleLowerCase().indexOf(filter) !== -1) : value

  }

}
