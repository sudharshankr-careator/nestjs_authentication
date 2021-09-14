import { LoginDto } from './../user/dto/login.dto';
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: { email: string; password: string }) {
    const user = await this.userService.findByEmail(login.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.password !== login.password) {
      return 'Wrong Credentials';
    }
    if (user && user.password === login.password) {
      return 'Login Successfull';
    }
  }

    async login(login: { email: string, password: string }) {
        return this.validateUser(login);
    }
}
