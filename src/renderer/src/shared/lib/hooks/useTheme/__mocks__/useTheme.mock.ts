import { vi } from "vitest";

const useThemeMock = (themeKey: string) => ({
  toggleTheme: vi.fn(),
  setPreferredTheme: vi.fn(),
  theme: `mockedTheme-${themeKey}`,
});

export { useThemeMock };
