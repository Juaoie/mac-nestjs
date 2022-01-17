import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  appId: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  single: boolean;

  @Column()
  link: string;
}
