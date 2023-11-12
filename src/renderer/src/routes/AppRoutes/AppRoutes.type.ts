import { route } from "react-router-typesafe-routes/dom";

export const APP_ROUTES = {
  BaldursGate3: route(
    "BG3",
    {},
    {
      BACKUP: route("backup"),
      SETTINGS: route("settings"),
    },
  ),
};
