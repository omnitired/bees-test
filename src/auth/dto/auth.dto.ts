import { User } from '../../user/schemas/user.schema';

export class LoginDto {
  mobileNumber: string;
}

export class LoginResponseDto {
  accessToken: string;
  user: User;
}
