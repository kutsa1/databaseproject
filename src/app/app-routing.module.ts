import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from "./components/author/author.component";
import {ThesisAddComponent} from "./components/thesis-add/thesis-add.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "theses",
    pathMatch: "full",
    component: HomeComponent
  },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
