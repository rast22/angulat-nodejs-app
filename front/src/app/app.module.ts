import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './articles-list/article/article.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    LoginComponent,
    RegistrationComponent,
    ArticleEditComponent,
    HeaderComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
