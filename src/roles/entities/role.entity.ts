import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;
}
export default role;
