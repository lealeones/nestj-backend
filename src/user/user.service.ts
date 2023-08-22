import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { LoginInput } from './dto/login-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(data: CreateUserInput) {
    return await this.prismaService.user.create({ data });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id }
    });
    if (!user) {
      throw new NotFoundException(`User with ID:${id} does not exist!`);
    }
    return user;
  }

  async update(id: number, data: UpdateUserInput) {
    return await this.findOne(id).then(
      async (user) =>
        this.prismaService.user.update({
          where: { id: user.id },
          data
        })
    )
  }

  async remove(id: number) {
    return await this.findOne(id).then(
      async (user) =>
        this.prismaService.user.delete({
          where: { id: user.id },
        })
    )
  }

  async login(data: LoginInput) {

    const res = await this.prismaService.user.findUnique({
      where: {
        username: data.username,
      }
    });
    if (data.pwd === res.pwd) {
      
      const userLogin: User = {
        id: res.id,
        username: res.username,
        pwd: '',
        mail: res.mail,
        name: res.name,
        lastname: res.lastname,
        rol: res.rol,
        createdAt: res.createdAt,
        updatedAt: res.updatedAt
      }
      
      return userLogin
    }
    
    throw new NotFoundException(`User does not exist!`);

  }

}
