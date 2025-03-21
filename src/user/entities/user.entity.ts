import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
import { DriverEntity } from '../../driver/entities/driver.entity';

@Entity()
@Unique(['email'])
@Unique(['tgId'])
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  tgId: string | null;

  @Column({ type: 'text', nullable: true })
  email: string | null;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => CompanyEntity, (company) => company.users)
  companies: CompanyEntity[];

  @ManyToMany(() => DriverEntity, (driver) => driver.users)
  @JoinTable()
  drivers: DriverEntity[];
}
