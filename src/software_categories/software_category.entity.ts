import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Table,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity("ap_msoftware_categories")
  export class SoftwareCategories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    slug: string;
  }