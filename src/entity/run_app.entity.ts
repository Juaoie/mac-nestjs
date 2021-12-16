import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class RunApp {
  @PrimaryColumn()
  id: number; //

  @Column()
  createTime: Date; //

  @Column()
  updateTime: Date;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  styleId: number;
}
