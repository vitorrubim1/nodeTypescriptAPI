//config do jest, para conversar com ts tbm

const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests', //label de testes unitarios
  testMatch: ['<rootDir>/src/**/*.test.ts'], //testes somente com arquivos na pasta src
  testEnvironment: 'node',
  clearMocks: true, //limpar os mocks por padrão
  preset: 'ts-jest', //para ligar com ts-jest, q foi instalado
  moduleNameMapper: { //alias do jest
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};