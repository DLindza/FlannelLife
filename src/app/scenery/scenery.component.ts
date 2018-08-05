import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'scenery',
  templateUrl: './scenery.component.html',
  styleUrls: ['./scenery.component.css']
})
export class SceneryComponent implements OnInit {
   sceneryPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.sceneryPosts = this.postService.getSceneryPosts();
  }

}
