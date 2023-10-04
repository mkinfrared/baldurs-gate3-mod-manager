const getNodeValue = (node: Element | null) => {
  const defaultValue = "N/A";

  return node?.getAttribute("value") ?? defaultValue;
};

export { getNodeValue };
