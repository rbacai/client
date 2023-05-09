import { Metadata } from './metadata';

export class Permission {
    public id: string;
    public key: string;
    public name: string;
    public description?: string;
    public created: Date;
    public updated: Date;
    public metadata?: Metadata[];
    public constructor(obj: Permission) {
        Object.assign(this, obj);
    }
}
