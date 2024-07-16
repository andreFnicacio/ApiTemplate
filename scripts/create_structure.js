const fs = require('fs');
const path = require('path');

const { getControllerContent } = require('./controllerTemplate');
const { getDtoContent } = require('./dtoTemplate');
const { getIndexContent } = require('./indexTemplate');
const { getSchemaContent } = require('./schemaTemplate');
const { getUseCaseContent } = require('./useCaseTemplate');

// Função para criar a estrutura de pastas e arquivos
const createCrudStructure = (flowName, crudOptions) => {
  const basePath = path.join(__dirname, '..', 'src', 'UseCases', flowName);

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
    console.log(`Pasta criada em ${basePath}`);
  }

  crudOptions.forEach((option) => {
    const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
    const operationPath = path.join(basePath, capitalizedOption);
    if (!fs.existsSync(operationPath)) {
      fs.mkdirSync(operationPath, { recursive: true });
      console.log(`Criando pasta para ${option} em ${operationPath}`);
    }

    const uppercaseFlowName = flowName.charAt(0).toUpperCase() + flowName.slice(1);

    const controllerContent = getControllerContent(capitalizedOption, uppercaseFlowName);
    fs.writeFileSync(path.join(operationPath, `${capitalizedOption}${uppercaseFlowName}.Controller.ts`), controllerContent);

    const schemaContent = getSchemaContent(capitalizedOption, uppercaseFlowName);
    fs.writeFileSync(path.join(operationPath, `${capitalizedOption}${uppercaseFlowName}.Schema.ts`), schemaContent);

    const useCaseContent = getUseCaseContent(capitalizedOption, uppercaseFlowName);
    fs.writeFileSync(path.join(operationPath, `${capitalizedOption}${uppercaseFlowName}.UseCase.ts`), useCaseContent);

    const indexContent = getIndexContent(capitalizedOption, uppercaseFlowName);
    fs.writeFileSync(path.join(operationPath, 'index.ts'), indexContent);

    console.log(`Criando arquivos para ${option} em ${operationPath}`);

    // Cria a pasta DTO e o arquivo DTO dentro dela
    const dtoPath = path.join(operationPath, 'DTO');
    if (!fs.existsSync(dtoPath)) {
      fs.mkdirSync(dtoPath, { recursive: true });
    }
    const dtoContent = getDtoContent(capitalizedOption, uppercaseFlowName);
    fs.writeFileSync(path.join(dtoPath, `I${capitalizedOption}${uppercaseFlowName}DTO.ts`), dtoContent);
    console.log(`Criando arquivo DTO para ${option} em ${dtoPath}`);
  });
};

// Executa a criação da estrutura
const run = async () => {
  const [flowName, crudOptionsString] = process.argv.slice(2);
  const crudOptions = crudOptionsString.split(',');

  createCrudStructure(flowName, crudOptions);
};

run();
