import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
   culturePosts: Post[];
   
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.culturePosts = this.postService.getCulturePosts();
  }

}
