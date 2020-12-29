import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

// const BACKEND_URL = environment.apiUrl + '/posts/';
const BACKEND_URL = environment.apiUrl + '/posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post[], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{message: string; posts: any, maxPosts: number}>(BACKEND_URL + queryParams)
    .pipe(
      map((postData) => {
      return {
        posts: postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id,
          creator: post.creator
        };
      }),
      maxPosts: postData.maxPosts
        };
      })
    )
    .subscribe(
      transformedPostData => {
        // console.log(transformedPostData);
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts});
      }
    );
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{_id: string, title: string, content: string, creator: string}>(BACKEND_URL + id);
  }

  addPost(title: string, content: string) {
    const postData = {
      id: null,
      title: title,
      content: content
    };
    // const postData: Post = {
    //   id: null,
    //   title: title,
    //   content: content
    // };
    // const postData = new FormData();
    // postData.append('title', title);
    // postData.append('content', content);

    this.http.post<{message: string, postId: string}>(BACKEND_URL, postData)
    .subscribe((responseData) => {
      this.router.navigate(['/posts']);
    });
  }

  updatePost(id: string, title: string, content: string) {
    const postData: Post = {
      id: id,
      title: title,
      content: content,
      creator: null
    };
    // let postData: Post | FormData;
    // postData = new FormData();
    // postData.append('id', id);
    // postData.append('title', title);
    // postData.append('content', content);
    this.http.put(BACKEND_URL + id, postData).subscribe(response => {
    this.router.navigate(['/posts']);
  });
  }

  deletePost(postId: string) {
    return this.http
    .delete(BACKEND_URL + '/' + postId);
  }
}
