module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/testData/mockScss.js'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(marked)/)'
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
  },
  extensionsToTreatAsEsm: ['.ts']
};