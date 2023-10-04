module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/*.stories.{ts,tsx}",
    "!**/*.type.{ts,tsx}",
    "!**/*.spec.{ts,tsx}",
  ],
  coveragePathIgnorePatterns: [],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ["node_modules", "release/app/node_modules", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFiles: [
    "./.erb/scripts/check-build-exists.ts",
    "react-app-polyfill/jsdom",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  transform: {
    "\\.(ts|tsx|js|jsx)$": "ts-jest",
    "^.+\\.svg$": "jest-transformer-svg",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/fileTransformer.js",
  },
  transformIgnorePatterns: [
    "release/app/dist",
    ".erb/dll",
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
