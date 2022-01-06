import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ThesisListComponent } from './components/thesis-list/thesis-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthorComponent } from './components/author/author.component';
import { UniversityComponent } from './components/university/university.component';
import { InstitueComponent } from './components/institue/institue.component';
import { SubjectTopicComponent } from './components/subject-topic/subject-topic.component';
import { LanguageComponent } from './components/language/language.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { ThesisAddComponent } from './components/thesis-add/thesis-add.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ToastrModule} from 'ngx-toastr';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DetailDialogComponent } from './components/dialogs/detail-dialog/detail-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ThesisListComponent,
    NavbarComponent,
    FooterComponent,
    AuthorComponent,
    UniversityComponent,
    InstitueComponent,
    SubjectTopicComponent,
    LanguageComponent,
    SupervisorComponent,
    CategoryComponent,
    ThesisAddComponent,
    HomeComponent,
    DeleteDialogComponent,
    DetailDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        ToastrModule.forRoot({
            timeOut: 1700
        }),
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
