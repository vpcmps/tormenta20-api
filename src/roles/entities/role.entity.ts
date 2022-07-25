import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class role {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column()
  @ApiProperty()
  public title: string;

  @Column()
  @ApiProperty()
  public description: string;
}
export default role;
