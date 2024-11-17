
import type {Config} from 'jest';

const config: Config = {

  collectCoverage: true,


  coverageDirectory: "coverage",

  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

};

export default config;
