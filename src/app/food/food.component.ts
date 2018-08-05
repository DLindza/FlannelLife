import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodPosts: Post[];
  scrollCallback;

  constructor(private postService : PostService) { 

  }

  ngOnInit() {
    this.foodPosts = this.postService.getFoodPosts();
    this.scrollCallback = this.postService.getFoodPosts.bind(this);
  }

}
