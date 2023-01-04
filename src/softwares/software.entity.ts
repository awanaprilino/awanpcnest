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
  
  @Entity("ap_msoftwares")
  export class Software extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    slug: string;

    @Column()
    version: string;

    @Column()
    additional_name: string;

    @Column()
    category: string;

    @Column()
    author: string;

    @Column()
    author_url: string;

    @Column()
    license: string;

    @Column()
    requirements: string;

    @Column()
    language: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text' })
    change_log: string;

    @Column({ nullable: true, type: 'timestamp' })
    date_published: Date;

    @Column({ nullable: true, type: 'timestamp' })
    date_modified: Date;

    @Column()
    excerpt: string;

    @Column()
    icon: string;

    @Column({ type: 'int'})
    total_download: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    rating: number;

    @Column({ type: 'int'})
    user_rating: number;

    @Column("char", { length: 1 })
    status: string;
  
    @Column()
    @CreateDateColumn()
    created_at: Date;
  
    @Column()
    @UpdateDateColumn()
    updated_at: Date;
  }