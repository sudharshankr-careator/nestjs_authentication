import { GoogleController } from './google.controller';
import { GoogleService } from './google.service';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { GoogleResolver } from './google.resolver';
import { OAuthStrategy } from './Strategy/oAuthStrategy';

@Module({
  imports: [UserModule],
  controllers: [GoogleController],
  providers: [AuthService, AuthResolver, GoogleService, GoogleResolver ,OAuthStrategy ]
})
export class AuthModule {}
