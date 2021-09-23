import { AuthService } from './../auth.service';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-jwt";
import {PassportStrategy} from '@nestjs/passport'

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor (private authService: AuthService) {
        super({
            userNameField: "email",
            passwordField: "password"
        })
    }

    async validate(login: { email: string, password: string }) {
        const user = this.authService.validateUser(login)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}
