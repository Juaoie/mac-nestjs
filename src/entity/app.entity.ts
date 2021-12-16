import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  appId: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  icon: string;
}
