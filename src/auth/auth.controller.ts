import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() loginDto: { mobileNumber: string }) {
    return await this.authService.login(loginDto);
  }
}
