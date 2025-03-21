import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
    createUser(options: {
        email: string;
    }): Promise<UserEntity>;
    getUser(filter: {
        email?: string;
        tgId?: string;
    }): Promise<UserEntity | null>;
}
