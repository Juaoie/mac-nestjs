import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryColumn()
  photoId: string; //相册id photoid

  @Column({ nullable: true })
  imgUrl: string; //正常图片地址 auto_size

  @Column({ nullable: true })
  imgHeight: string; //图片高度 height

  @Column({ nullable: true })
  imgWidth: string; //图片宽度
}
