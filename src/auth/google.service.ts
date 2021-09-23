import { UserService } from './../user/user.service';
import { GoogleInput } from './../user/dto/google.input.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  constructor(private userService: UserService) {}
  async validator(userDetails: GoogleInput) {
    const { googleId } = userDetails;
    const user = this.userService.findByGoogle(googleId);
    if (user) {
      await this.userService.updateByGoogle(googleId, userDetails);
      return user;
    }
    return this.userService.createByGoogle(userDetails);
  }
}
