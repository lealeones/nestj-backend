import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
