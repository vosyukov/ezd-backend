import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  public async createUser(options: { email?: string; tgId?: string }): Promise<UserEntity> {
    return this.repository.save({ email: options.email, tgId: options.tgId });
  }

  public async getUser(filter: { email?: string; tgId?: string }): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { email: filter.email } });
  }
}
