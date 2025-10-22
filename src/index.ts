import { PluginDefinition } from "@yaakapp/api";

export const plugin: PluginDefinition = {
  themes: [
    {
      id: "darcula-2018",
      label: "Darcula 2018",
      dark: true,
      base: {
        surface: "#2b2b2b",
        text: "#d0d0ee",
        textSubtle: "#b8b8d0",
        textSubtlest: "#686868",
        primary: "#9876aa",
        secondary: "#686868",
        info: "#6897bb",
        success: "#d0d0ff",
        notice: "#61a151",
        warning: "#cc7832",
        danger: "#cc7832",
      },
      components: {
        dialog: {
          surface: "#3d3f41",
        },
        sidebar: {
          surface: "#3d3f41",
          border: "#2b2b2b",
        },
        appHeader: {
          surface: "#3d3f41",
          border: "#2c2c2c",
        },
        responsePane: {
          surface: "#3d3f41",
          border: "#2b2b2b",
        },
        button: {
          primary: "#9876aa",
          secondary: "#686868",
          info: "#6897bb",
          success: "#52a12e",
          notice: "#bc9458",
          warning: "#cc7832",
          danger: "#bc3f3c",
        },
      },
    },
  ],
};
