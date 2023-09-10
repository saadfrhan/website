// import 'server-only' not working with API routes yet
import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface ViewsTable {
  slug: string;
  count: number;
}

interface Database {
  views: ViewsTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    host: process.env.NEXT_PUBLIC_PLANETSCALE_HOST || '<host>',
    username: process.env.NEXT_PUBLIC_PLANETSCALE_USERNAME || '<username>',
    password: process.env.NEXT_PUBLIC_PLANETSCALE_PASSWORD || '<password>',
  }),
});
