import { Injectable } from '@angular/core';

import { Post } from  './post';
import { FOODPOSTS, CULTUREPOSTS, SCENERYPOSTS } from './mock-posts';

@Injectable()
export class PostService {

    getFoodPosts(): Post[] {
        return FOODPOSTS;
    }

    getCulturePosts(): Post[] {
        return CULTUREPOSTS;
    }

    getSceneryPosts(): Post[] {
        return SCENERYPOSTS;
    }
}