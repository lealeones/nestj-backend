import { Injectable } from '@nestjs/common';
import { CreateTripInput } from './dto/create-trip.input';
import { UpdateTripInput } from './dto/update-trip.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TripsService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createTripInput: CreateTripInput) {
    return await this.prismaService.trip.create({data:createTripInput})
  }

  async findAll() {
    return await this.prismaService.trip.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} trip`;
  }

  update(id: number, updateTripInput: UpdateTripInput) {
    return `This action updates a #${id} trip`;
  }

  remove(id: number) {
    return `This action removes a #${id} trip`;
  }
}
