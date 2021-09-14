import { Role } from './../roles';
import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
registerEnumType(Role, {
  name: 'Role',
});
@InputType()
export class CreateUserInput {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(()=> Role)
  role: Role;
}
