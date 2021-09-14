import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserInput: CreateUserInput) {
    const user = await this.userRepo.create(createUserInput);
    return this.userRepo.save(user);
  }

 async findAll() {
    return await this.userRepo.find() ;
 }

  async findByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }

 async findOne(id: string) {
    return await this.userRepo.findOne(id);
  }

 async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userRepo.update(
     updateUserInput.id,
        updateUserInput
    )
  }

  remove(id: string) {
    return this.userRepo.delete(id);
  }
}
