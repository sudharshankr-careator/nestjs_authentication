import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GoogleInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  googleId: string;
}