import { User } from 'src/user/entities/user.entity';
import { Resolver } from "@nestjs/graphql";

@Resolver(()=> User)

export class GoogleResolver {

}