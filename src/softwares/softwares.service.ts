import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';
import { Software } from './software.entity';

@Injectable()
export class SoftwaresService {

    async findAll(query): Promise<any>{
        //const softwares = await Software.find();
        const take = query.take || 10
        const skip = query.skip || 0
        const keyword = query.keyword || ''

        const [result, total] = await Software.findAndCount(
            { 
                order: { updated_at: "DESC" },
                where: { name: Like('%' + keyword + '%') },
                take: take,
                skip: skip
            }
        );

        const from = 1+Number(skip)
        const to = Math.min(Number(skip)+Number(take), total)
        const next = Number(skip)+Number(take)
        const previous = Number(skip)-Number(take)

        return {
            data: result,
            from: from,
            to: to,
            next: (total < next ? 0 : next),
            previous:  previous,
            count: total
        }
    }
}
