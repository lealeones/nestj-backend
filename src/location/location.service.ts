import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(data: CreateLocationInput) {
    return await this.prismaService.location.create({data})
  }

  findAll() {
    return this.prismaService.location;
  }

  async findOne(id: number) {
    return await this.prismaService.location.findUnique({
      where: { id }
    });

  }

  update(id: number, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
