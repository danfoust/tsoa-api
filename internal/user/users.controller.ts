import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Response,
  Route,
  SuccessResponse,
} from 'tsoa';
import { IUser } from '../../pkg/tsoa-api/user/user';
import { UserCreationParams, UsersService } from './users.service';

interface ValidateErrorJSON {
  message: 'Validation failed';
  details: { [name: string]: unknown };
}

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  public getUser(@Path() userId: number) {
    return new UsersService().get(userId);
  }

  @Get()
  public getUsers(): IUser[] {
    return new UsersService().getAll();
  }

  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201);
    console.log('requestBody: ', requestBody);
    // new UsersService().create(requestBody);
    return;
  }
}
