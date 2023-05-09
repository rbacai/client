export class Metadata {
    public key: string;
    public value: string;
    public constructor(obj: Metadata) {
        Object.assign(this, obj);
    }
}
