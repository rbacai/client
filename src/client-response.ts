import { HttpStatusCode } from 'axios';

export class ClientResponse<T> {
    public result?: boolean = false;
    public status: HttpStatusCode;
    public message?: string;
    public data?: T;

    public constructor(obj: ClientResponse<T>) {
        Object.assign(this, obj);

        if (obj.status >= 200 && obj.status < 300) {
            this.result = true;
        }
    }
}
