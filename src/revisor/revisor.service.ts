import { Injectable } from '@nestjs/common';
import { CreateRevisorInput, CreateUserRevisorInput } from './dto/create-revisor.input';
import { UpdateRevisorInput } from './dto/update-revisor.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Injectable()
export class RevisorService {
  constructor(private readonly prismaService: PrismaService) { }


  async create(createRevisorInput: CreateRevisorInput) {
    return await this.create(createRevisorInput);
  }

  async createUserRevisor(data: CreateUserRevisorInput) {
    try {
      const dataUser: CreateUserInput = {
        username: data.username,
        pwd: data.pwd,
        mail: data.mail,
        name: data.name,
        lastname: data.lastname,
        rol: data.rol,
      }
      const res = await this.prismaService.user.create({ data: dataUser })
     if (res.id){
      const dataRevisor: CreateRevisorInput = {
        titulo: data.titulo,
        cv_path: data.cv_path,
        userId: res.id
      }
      const revisor = await this.create(dataRevisor)
      return revisor
     }
    }
    catch (error) {
      console.log("error en crear revisor CATCH", error)
    }
  };


  findAll() {
    return `This action returns all revisor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revisor`;
  }

  update(id: number, updateRevisorInput: UpdateRevisorInput) {
    return `This action updates a #${id} revisor`;
  }

  remove(id: number) {
    return `This action removes a #${id} revisor`;
  }
}
