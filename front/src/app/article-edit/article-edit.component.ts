import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticlesService} from "../services/articles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent {
  postForm!: FormGroup;

  constructor(private router: Router,private articleService: ArticlesService) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
    this.articleService.createArticle(this.postForm.value.title, this.postForm.value.content).then(res =>{
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }


}
