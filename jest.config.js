module.exports = {
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    testURL: 'http://localhost/',
    coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    }
};
