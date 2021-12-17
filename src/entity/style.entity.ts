import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Style {
  @PrimaryGeneratedColumn()
  id: string; //

  @Column()
  left: number;

  @Column()
  top: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  zIndex: number;
}
