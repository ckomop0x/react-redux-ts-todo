module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/jest-preprocess.js',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/__generated__/**',
    '!**/vendor/**',
    '!**/mocks/**',
    '!**/.cache/**',
    '!**/public/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^styles/(.*)': '<rootDir>/src/styles/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^types/(.*)': '<rootDir>/src/types/$1',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'index.ts'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
