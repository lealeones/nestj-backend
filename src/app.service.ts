import { Inject, Injectable } from '@nestjs/common';
import { CreateFileInput } from './files/dto/create-file.input';
import { FilesService } from './files/files.service';

@Injectable()
export class AppService {
   @Inject(FilesService)
   private readonly FilesService: FilesService;


  fileToDB(createFileInput: CreateFileInput) {
    return this.FilesService.create(createFileInput)
  }

  getHello() {
    return { hello: 'world' };
  }

}