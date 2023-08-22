import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';



@InputType()
export class CreateUserAlumno extends CreateUserInput  {
  @Field(() => String, { description: 'phone' })
  phone: string;
  @Field(() => String, { description: 'mobile' })
  mobile: string;
  @Field(() => Int, { description: 'userId' })
  userId: number;
}

@InputType()
export class CreateAlumnoInput {
  @Field(() => String, { description: 'phone' })
  phone: string;
  @Field(() => String, { description: 'mobile' })
  mobile: string;
  @Field(() => Int, { description: 'userId' })
  userId: number;
}