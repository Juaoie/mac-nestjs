import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { Author } from "./author.entity";
import { Photo } from "./photo.entity";

@Entity()
export class Album {
  @PrimaryColumn()
  albumId: string; //相册id albumid

  @Column({
    nullable: true,
  })
  albumCreatedTime: string; //相册创建时间 timeint

  @Column({
    nullable: true,
  })
  content: string; //相册内容 content

  @Column({
    nullable: true,
  })
  title: string; //相册标题 work_title

  @ManyToOne(() => Author, author => author.albums)
  author: Author;

  @OneToMany(() => Photo, photo => photo.album)
  photos: Photo[];
}
