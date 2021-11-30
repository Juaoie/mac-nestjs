import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoveMapping {
  @PrimaryGeneratedColumn()
  id: string; //相册id albumid

  @Column()
  authorId: string; //用户id

  @Column()
  albumId: string; //相册id
}
