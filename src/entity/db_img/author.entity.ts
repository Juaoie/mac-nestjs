import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Album } from "./album.entity";

@Entity()
export class Author {
  @PrimaryColumn()
  authorId: string; //用户id userid

  @Column({ nullable: true })
  userCreatedTime: string; //用户创建时间 addtime

  @Column({ nullable: true })
  userChatNum: number; //用户消息数量 allmsg

  @Column({ nullable: true })
  cityNumber: string; //用户城市编码 city

  @Column({ nullable: true })
  mailbox: string; //邮箱 email

  @Column({ nullable: true })
  phone: string; //手机号 mob

  @Column({ nullable: true })
  userName: string; //用户名称 username

  @Column({ nullable: true })
  sex: string; //用户性别 sex

  @Column({ nullable: true })
  weibo: string; //微博 weibo

  @Column({ nullable: true })
  webAdmin: string; //微博域名 webadmin

  @Column({ nullable: true })
  weixin: string; //微信 weixin

  @Column({ nullable: true })
  work: string; //工作 work

  @Column({ nullable: true })
  token: string; //token

  @Column({ nullable: true })
  domain: string; //个性域名 domain

  @Column({ nullable: true })
  uptime: string; //更新时间 uptime

  @Column({ nullable: true })
  vip: number; //vip等级 vip

  @Column({ nullable: true })
  isVip: number; //是否是vip isV

  @Column({ nullable: true })
  isVipText: string; //vip名称 isV_info

  @Column({ nullable: true })
  miniHeadUrl: string; //小的头像 faceurl

  @Column({ nullable: true })
  headUrl: string; //头像地址 headimg

  @Column({ nullable: true })
  headUrlPc: string; //pc版本头像地址

  @Column({ nullable: true })
  headUrlPcBg: string; //pc版本头像背景图片 headimg_pc_real

  @OneToMany(() => Album, album => album.author)
  albums: Album[];
}
