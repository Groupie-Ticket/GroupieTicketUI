import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(png|jpg|jpeg|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    },
};

export default config;
