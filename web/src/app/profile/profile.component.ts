import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './../../../../pkg/tsoa-api/user/user';
import { UserService } from './../core/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  get userId() {
    return this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.userService
      .getUser(this.userId)
      .subscribe({ next: (user) => this.user$.next(user) });
  }
}
