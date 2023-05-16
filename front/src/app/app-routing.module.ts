import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesListComponent} from "./articles-list/articles-list.component";
import {LoginComponent} from "./login/login.component";
import {ArticleEditComponent} from "./article-edit/article-edit.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path:'login-page', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'new-article', component: ArticleEditComponent},
  {path: '**', redirectTo: 'articles', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
