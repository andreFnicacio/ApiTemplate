const fs = require('fs');
const path = require('path');

// Função para criar a estrutura de pastas e arquivos de repositórios
const createRepositoriesStructure = (flowName) => {
  const basePath = path.join(__dirname, '..', 'src', 'Repositories', flowName);

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    console.log(`Pasta de repositórios criada em ${basePath}`);
  }

  // Adicione aqui a lógica para criar os arquivos necessários dentro da pasta de repositórios
  // Por exemplo:
  fs.writeFileSync(path.join(basePath, `${flowName}Repository.ts`), '');
  console.log(`Criando arquivo ${flowName}Repository.ts em ${basePath}`);
};

// Executa a criação da estrutura de repositórios
const run = async () => {
  const [flowName] = process.argv.slice(2);

  createRepositoriesStructure(flowName);
};

run();
