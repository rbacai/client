import { Metadata } from './metadata';
import { Permission } from './permission';

export class Role {
    public id: string;
    public name: string;
    public description?: string;
    public created: Date;
    public updated: Date;
    public metadata?: Metadata[];
    public permissions?: Permission[];

    public constructor(obj: Role) {
        Object.assign(this, obj);
    }
}
