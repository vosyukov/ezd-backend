import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(email: string): Promise<UserEntity>;
}
