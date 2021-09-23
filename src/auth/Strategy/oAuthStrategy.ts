import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, 'google') {
    constructor () {
        super({
          //   client_id:
          //     '49574521936-phu0frn5mr6t7bfokhfr76neqc6p34r6.apps.googleusercontent.com',
          //   client_secret: 'VBxGd9M6g3Xdd28-muAlV6Jm',
          //   callBackURL: 'hhtp://localhost:3000/google/redirect',
          //   scpoe: ['email', 'profile'],
          client_id:
            '49574521936-phu0frn5mr6t7bfokhfr76neqc6p34r6.apps.googleusercontent.com',
          client_secret: 'VBxGd9M6g3Xdd28-muAlV6Jm',
          callBackURL: 'hhtp://localhost:3000/google/redirect',
          scope: ['email', 'profile'],
        });
    }
    async validate(accessToken: string, refreshToken:string, profile: any, done:VerifyCallback) {
        const { name, emails, photos, displayName, id } = profile;
        const user = {
            username: displayName,
            email: emails[0].value,
            avatar: photos[0].value,
            googleId: id,
        }
        done(null, user)
    }
}