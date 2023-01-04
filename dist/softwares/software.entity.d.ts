import { BaseEntity } from 'typeorm';
export declare class Software extends BaseEntity {
    id: number;
    name: string;
    slug: string;
    version: string;
    additional_name: string;
    category: string;
    author: string;
    author_url: string;
    license: string;
    requirements: string;
    language: string;
    description: string;
    change_log: string;
    date_published: Date;
    date_modified: Date;
    excerpt: string;
    icon: string;
    total_download: number;
    rating: number;
    user_rating: number;
    status: string;
    created_at: Date;
    updated_at: Date;
}
