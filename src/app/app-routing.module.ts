import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThesisListComponent} from "./components/thesis-list/thesis-list.component";
import {AuthorComponent} from "./components/author/author.component";
import {ThesisAddComponent} from "./components/thesis-add/thesis-add.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [

  {
    path: "theses",
    component: HomeComponent,
  },
  {
    path: "author",
    component: AuthorComponent,
  },
  {
    path: "thesis-add",
    component: ThesisAddComponent
  },
  {
    path: '',
    redirectTo: "theses",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
