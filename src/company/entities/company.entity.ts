import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { DriverEntity } from '../../driver/entities/driver.entity';

export enum CompanyType {
  LEGAL = 'LEGAL',
  INDIVIDUAL = 'INDIVIDUAL',
}

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'text' })
  public inn!: string;

  @Column({ type: 'text' })
  public name!: string;

  @Column({ type: 'text' })
  public type: CompanyType;

  @ManyToMany(() => UserEntity, (user) => user.companies)
  @JoinTable()
  public users: UserEntity[];

  @ManyToMany(() => DriverEntity, (driver) => driver.companies)
  @JoinTable()
  public drivers: DriverEntity[];
}
