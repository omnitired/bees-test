import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: { mobileNumber: string }): Promise<any> {
    const user = await this.userService.readByMobileNumber(
      loginDto.mobileNumber,
    );

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    const payload = { mn: loginDto.mobileNumber, uid: user?._id };
    return {
      access_token: this.jwtService.sign(payload),
      // access_token: generateJWT(payload),
      user,
    };
  }
}
