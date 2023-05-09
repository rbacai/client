export class ClientCredential {
    public id: string;
    public secret: string;

    public constructor(obj: ClientCredential) {
        Object.assign(this, obj);
    }
}
