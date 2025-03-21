import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
import { UserEntity } from '../../user/entities/user.entity';
const TABLE_NAME = 'driver';

export enum DriverStatus {
  HIRED = 1,
  FIRED = 2,
}

@Entity(TABLE_NAME)
// @Unique(['inn'])
export class DriverEntity {
  public static tableName = TABLE_NAME;

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public inn: string;

  @Column()
  public name: string;

  @Column()
  public surname: string;

  @Column({ type: 'smallint' })
  public status: DriverStatus;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToMany(() => CompanyEntity, (company) => company.drivers)
  companies: CompanyEntity[];

  @ManyToMany(() => UserEntity, (user) => user.drivers)
  users: UserEntity[];
}
