const isHtmlElement = (value: unknown): value is HTMLElement =>
  value instanceof HTMLElement;

const isError = (value: unknown): value is Error => value instanceof Error;

export { isHtmlElement, isError };
