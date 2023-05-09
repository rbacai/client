require('dotenv').config({
    path: `.env.${process.env.ENVIRONMENT || 'local'}`
});

import { Client } from './client';

describe('client', () => {
    const client = new Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

    test('authorize fail', async () => {
        expect((await client.authorize('foo', 'bar')).result).toBe(false);
    });

    // test('authorize success', async () => {
    //     expect((await client.authorize('test', 'test.create')).result).toBe(true);
    // });
});
