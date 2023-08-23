export function project_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "boolean",
      name: "show_on_landing",
      label: "Show on Landing",
    },
    {
      type: "string",
      name: "image_style",
      label: "Image Style",
      options: ["vertical", "horizontal"],
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ];
}
