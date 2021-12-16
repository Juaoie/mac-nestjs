import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RunApp {
  @PrimaryGeneratedColumn()
  id: number; //

  @Column()
  createTime: Date; //

  @Column()
  updateTime: Date;

  @Column()
  title: string;

  @Column()
  styleId: number;
}
