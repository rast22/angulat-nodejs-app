import {Component, Input} from '@angular/core';
import {IArticle} from "../../services/datatypes";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article!: IArticle

}
