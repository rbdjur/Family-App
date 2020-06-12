import { Component, OnInit, NgModule, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import { Validators, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs';

import { PostsService } from '../posts.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit, OnDestroy {
  enteredContent = '';
  enteredTitle = '';
  post: Post;
  isLoading = false;
  form: FormGroup;
  imagePreview;
  private mode = 'create';
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public postsService: PostsService,
    public router: ActivatedRoute,
    private authService: AuthService) { }


  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.isLoading = false;
    });
    this.form = new FormGroup({
      title: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {validators: [Validators.required]})
    });
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
            creator: postData.creator
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content
          });
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

onSavePost() {
  if (this.form.invalid) {
    return;
  }
  this.isLoading = true;
  if (this.mode === 'create') {
      this.postsService.addPost(
        this.form.value.title,
        this.form.value.content);
    } else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content);
    }
  this.form.reset();
  }
}
