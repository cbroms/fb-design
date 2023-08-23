import { defineConfig } from "tinacms";
import { project_pageFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "af863c29-7227-4e25-aa76-145b1e1eb576", // Get this from tina.io
  token: "0f4dc46a07d95d3ddf0cdd2d3ffa25efeaad1c37", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "static/img",
      publicFolder: "./",
    },
    loadCustomStore: async () => {},
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "_projects",
        match: {
          include: "**/*",
        },
        defaultItem: () => {
          return {
            title: "New project",
            subtitle: "This is the project's subtitle",
            layout: "project-page",
          };
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...project_pageFields(),
        ],
      },
    ],
  },
});
