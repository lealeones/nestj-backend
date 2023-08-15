import { Injectable } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private readonly prismaService: PrismaService) {}
  
  
  
 async create(data: CreateFileInput) {

  const a = await this.prismaService.file.create({data})
  console.log("creando file",a ) 
  return a
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileInput: UpdateFileInput) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
