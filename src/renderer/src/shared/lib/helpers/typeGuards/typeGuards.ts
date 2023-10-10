const isHtmlElement = (value: unknown): value is HTMLElement =>
  value instanceof HTMLElement;

export { isHtmlElement };
