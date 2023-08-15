import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    LocationModule,
    UserModule,
    FilesModule,
    
  ],

})


export class AppModule { }
