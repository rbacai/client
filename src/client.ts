import axios from 'axios';
import { ClientCredential } from './client-credential';
import { ClientResponse } from './client-response';

export class Client {
    private readonly baseUrl: string = 'http://localhost:3000';
    private readonly credential: ClientCredential;

    public constructor(clientId: string, clientSecret: string) {
        this.credential = new ClientCredential({
            id: clientId,
            secret: clientSecret
        });
    }

    public getHeaders(): any {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.credential.id}:${this.credential.secret}`
        };
    }

    public async authorize<T>(principal: string, permission: string): Promise<ClientResponse<T>> {
        try {
            const response = await axios.post(
                `${this.baseUrl}/authorization/authorize`,
                {
                    principal,
                    permission
                },
                {
                    headers: this.getHeaders()
                }
            );
            return new ClientResponse<any>({
                status: response.status
            });
        } catch (e) {
            return new ClientResponse<any>({
                status: e.response.status,
                message: e.response.statusText
            });
        }
    }
}
