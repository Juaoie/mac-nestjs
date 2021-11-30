import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  userId: string; //相册id albumid

  @Column({
    nullable: true,
  })
  userName: string; //相册创建时间 timeint
}
