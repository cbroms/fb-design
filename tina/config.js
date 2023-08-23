import { defineConfig } from "tinacms";
import { project_pageFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "8bf78283-e4ba-4d42-928e-d368a0c2e75f", // Get this from tina.io
  token: "144e2b8fa16995b282233dda336b39e04701e1ff", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
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
