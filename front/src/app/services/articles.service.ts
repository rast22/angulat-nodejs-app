import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {IArticle} from "./datatypes";
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient, private authService: AuthServiceService) {
  }

  async getArticles() {
    return await lastValueFrom(this.http.get<IArticle[]>('http://localhost:5500/api/posts/get-posts'));
  }

  async createArticle(title: string, content: string) {
    let userId = this.authService.getUserId()
    if (userId) {
      return await lastValueFrom(this.http.post('http://localhost:5500/api/posts/create-post', {userId, title, content}));
    } else {
      return false
    }
  }
}
