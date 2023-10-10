import { ReactElement, ReactNode } from "react";

const getNodeText = (node: ReactNode): number | string => {
  if (typeof node === "string" || typeof node === "number") {
    return node;
  }

  if (node instanceof Array) {
    return node.map(getNodeText).join("");
  }

  if (typeof node === "object" && node) {
    return getNodeText((node as ReactElement).props.children);
  }

  return "";
};

export { getNodeText };
