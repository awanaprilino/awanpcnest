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
  import * as bcrypt from 'bcryptjs';
  
  @Entity("ap_musers")
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column("char", { length: 1 })
    privilege: string;
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    created_at: Date;
  
    @Column()
    @UpdateDateColumn()
    updated_at: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 8);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
  }