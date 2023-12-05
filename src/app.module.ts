import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { AlumnoModule } from './alumno/alumno.module';
import { AlumnoService } from './alumno/alumno.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { LocationModule } from './location/location.module';
import { PreProjectModule } from './pre-project/pre-project.module';
import { PrismaService } from './prisma/prisma.service';
import { ProjectFinalModule } from './project-final/project-final.module';
import { ReviewInstanceModule } from './review-instance/review-instance.module';
import { ReviewModule } from './review/review.module';
import { RevisorModule } from './revisor/revisor.module';
import { UserModule } from './user/user.module';
import { TripsModule } from './trips/trips.module';
import { TicketsModule } from './tickets/tickets.module';
import { PaymentModule } from './payment/payment.module';


@Module({
  controllers: [AppController],
  providers: [AppService,AlumnoService,PrismaService],
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
    AlumnoModule,
    RevisorModule,
    ProjectFinalModule,
    PreProjectModule,
    ReviewInstanceModule,
    ReviewModule,
    TripsModule,
    TicketsModule,
    PaymentModule, 
  ],

})


export class AppModule { }
