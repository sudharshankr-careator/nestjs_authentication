import { AuthService } from './auth.service';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { LoginDto } from 'src/user/dto/login.dto';

@Resolver(()=> User)
export class AuthResolver {
    constructor (private authService: AuthService) {}


    @Mutation(() => String)
    async login(@Args('login') login: LoginDto) {
        const user = await this.authService.validateUser(login)

}


}
