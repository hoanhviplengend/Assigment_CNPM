import { Controller, Post, Body, Delete } from '@nestjs/common';
import { AuthService, User } from '../auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    console.log('Đã nhận login request:', body); 
    return this.authService.login(body.email, body.password);
  }

  @Delete('clear')
  clearLoginSession() {
  return this.authService.clearLoginSession();
}
  @Post('signup')
  signup(@Body() body: User) {
  console.log('Yêu cầu đăng ký mới:', body);
  return this.authService.register(body);
}

}
