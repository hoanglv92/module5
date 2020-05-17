import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NewsService} from "../../news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  @Output() onNewArticle = new EventEmitter();

  articleForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.minLength(20)),
      url: new FormControl()
    });
  }

  onSave() {
    const article: Article = this.articleForm.value;
    this.createNews(article);
  }

  createNews(article: Article) {
    this.httpClient.post('http://localhost:8000/news', article).subscribe( (result) => {
      console.log('Thêm bài viết thành công');

      this.onNewArticle.emit();
      // direct --> /
      this.router.navigate(['/'] );
    }, (error) => {
      console.log('Gặp lỗi khi thêm bài viết');
      console.error(error);
    });
  }

}
