import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/articleInterface';
@Component({
  selector: 'app-article-card[article]',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: Article
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
