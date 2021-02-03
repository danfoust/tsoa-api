import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser, User } from './../../../../../pkg/tsoa-api/user/user';
import { HttpService } from './../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private httpService: HttpService) {}

  getUser(id: string): Observable<User> {
    return this.httpService
      .get<IUser>(`${this.apiUrl}/${id}`)
      .pipe(map((user: IUser) => new User(user)));
  }

  getUsers(): Observable<User[]> {
    return this.httpService
      .get<IUser[]>(`${this.apiUrl}`)
      .pipe(map((users: IUser[]) => users.map((u) => new User(u))));
  }
}
