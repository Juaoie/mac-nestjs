import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Style } from "./style.entity";

@Entity()
export class RunApp {
  @PrimaryGeneratedColumn()
  id: number; //

  @Column()
  userId: number;

  @Column()
  appId: number;

  @Column()
  createTime: Date; //

  @Column()
  updateTime: Date;

  @Column()
  title: string;

  @Column() //正在使用
  state: boolean;

  @Column()
  hidden: boolean;

  @OneToOne(() => Style)
  @JoinColumn()
  style: Style;
}
