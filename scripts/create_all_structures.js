const { exec } = require('child_process');
const inquirer = require('inquirer');
const path = require('path');

// Pergunta o nome do fluxo
const askFlowName = () => {
  return inquirer.prompt([
    {
      name: 'flowName',
      type: 'input',
      message: 'Digite o nome do fluxo:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Por favor, forneça o nome do fluxo.';
        }
      },
    },
  ]);
};

// Pergunta quais operações CRUD o usuário deseja criar
const askCrudOptions = () => {
  const choices = ['create', 'get', 'update', 'delete', 'getbyid'];
  return inquirer.prompt([
    {
      name: 'crudOptions',
      type: 'checkbox',
      message: 'Selecione as operações CRUD (use a barra de espaço para selecionar):',
      choices: choices,
      validate: function (answer) {
        if (answer.length < 1) {
          return 'Você deve escolher pelo menos uma operação.';
        }
        return true;
      },
    },
  ]);
};

const runScript = (scriptPath, args) => {
  return new Promise((resolve, reject) => {
    exec(`sudo node ${scriptPath} ${args.join(' ')}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o script: ${error}`);
        return reject(error);
      }
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
};

const runAllScripts = async () => {
  try {
    const flowNameAnswer = await askFlowName();
    const crudOptionsAnswer = await askCrudOptions();
    const flowName = flowNameAnswer.flowName;
    const crudOptions = crudOptionsAnswer.crudOptions.join(',');

    await runScript(path.join(__dirname, 'create_structure.js'), [flowName, crudOptions]);
    await runScript(path.join(__dirname, 'create_repositories_structure.js'), [flowName]);
  } catch (error) {
    console.error('Erro ao executar os scripts:', error);
  }
};

runAllScripts();
