import * as path from 'path'; //import relative from paths
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, "../.."); //pegando diretorio atual de um arquivo tal, e voltando 2X(raiz do projeto);

moduleAlias.addAliases({ //adding alias to folders
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
})
