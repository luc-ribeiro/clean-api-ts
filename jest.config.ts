import type { Config } from 'jest'

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  preset: '@shelf/jest-mongodb'
}

export default config
