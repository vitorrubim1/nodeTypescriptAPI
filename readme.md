##COMMANDS TO DEPENDENCY DEVELOPER 
  - yarn add -D typescript # (intuitivo);
  - yarn add -D @types/node # typagem 
  - yarn add -D @types/module-alias # typagem 
  - yarn add -D ts-node-dev # equivalente ao nodemon para ts 
  - yarn add -D @typescript-eslint/eslint-plugin eslint @typescript-eslint/parser # eslintzada

##COMMAND FOR THE PROJECT IN PRODUCTION 
  - yarn add module-alias # por alias nas pastas


##FOLDERS

###folder test:
  - testes high level, para integração funcional

###folder dist: 
  - pasta da compilação de ts para js

##FILES

##package.json
  - Build: # Transpila o código ts para js 
  - Start: # Chama o 'Build' e roda o código node final
  - Start-dev: # Para desenvolvimento
  - Lint: # Aponto as pastas e a extensão
  - Lint-fix: # Para arrumar o código