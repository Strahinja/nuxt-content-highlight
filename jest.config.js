module.exports = {
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        'lib/**/*.js',
        '!lib/templates/**/*',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/lib/$1',
        '^@@$': '<rootDir>',
        '^~/(.*)$': '<rootDir>/lib/$1',
        '^~~$': '<rootDir>',
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
}
