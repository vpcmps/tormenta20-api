import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class status {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public strength: number;

  @Column()
  public wisdom: number;

  @Column()
  public dexterity: number;

  @Column()
  public constitution: number;

  @Column()
  public intelligence: number;

  @Column()
  public charism: number;
}
export default status;
