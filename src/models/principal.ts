import { Metadata } from './metadata';
import { PrincipalStatus } from './principal-status';
import { Role } from './role';

export class Principal {
    public id: string;
    public name: string;
    public externalId?: string;
    public description?: string;
    public status: PrincipalStatus;
    public created: Date;
    public updated: Date;
    public metadata?: Metadata[];
    public roles?: Role[];

    public constructor(obj: Principal) {
        Object.assign(this, obj);
    }

    public hasRole(name: string): boolean {
        if (!this.roles) {
            return false;
        }

        for (const role of this.roles) {
            if (role.name === name) {
                return true;
            }
        }

        return false;
    }

    public hasPermission(key: string): boolean {
        if (!this.roles) {
            return false;
        }
        for (const role of this.roles) {
            if (!role.permissions) {
                continue;
            }

            for (const permission of role.permissions) {
                if (permission.key === key) {
                    return true;
                }
            }
        }

        return false;
    }
}
