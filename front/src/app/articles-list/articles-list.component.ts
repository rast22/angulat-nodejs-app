import { Component } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {IArticle} from "../services/datatypes";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  articles: IArticle[] = [];
  constructor(private articlesService: ArticlesService) {
  }

  async ngOnInit() {
    this.articlesService.getArticles().then(
      (res: IArticle[]) => {
        console.log(res)
        this.articles = res;
      }
    )
  }
}
