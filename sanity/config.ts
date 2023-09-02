import { createClient, type ClientConfig } from '@sanity/client';
import { API_VERSION, DATASET, PROJECT_ID } from './env';

const config: ClientConfig = {
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: process.env.NODE_ENV === 'production'
}

const client = createClient(config);

export default client;