import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
import {
    visionTool
} from '@sanity/vision';
import { API_VERSION, DATASET, PROJECT_ID } from "./sanity/env";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  projectId: PROJECT_ID,
  dataset: DATASET,
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: API_VERSION })
  ],
  schema: { types: schemaTypes },
});