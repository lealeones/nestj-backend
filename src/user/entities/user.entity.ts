import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { RolUser } from '@prisma/client';

registerEnumType(RolUser, {
  name: 'RolUser',
});

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User ID', nullable: false })
  id: number;
  @Field(() => String, { nullable: false })
  username: string;
  @Field(() => String, { nullable: false })
  pwd: string;
  @Field(() => String, { nullable: false })
  mail: string;
  @Field(() => String, { nullable: false })
  name: string;
  @Field(() => String, { nullable: false })
  lastname: string;
  @Field(() => RolUser, { nullable: false })
  rol: RolUser;

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date

  //   // Alumnos     Alumnos[]
  //   // Revisores   Revisores[]
}


