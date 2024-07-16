// src/shared/Swagger/swagger.json
var openapi = "3.0.0";
var info = {
  title: "API TEMPLATE",
  description: "Est\xE1 api tem objetivo de informar como utilizar este servidor.",
  version: "1.0.0",
  contact: {
    email: ""
  }
};
var servers = [
  {
    url: "http://localhost:3333",
    description: "API LOCAL"
  }
];
var paths = {
  "/login": {
    post: {
      summary: "Login",
      tags: [
        "Login/Session"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: " "
            },
            examples: {
              Login: {
                value: {
                  email: "root_dev_rm@hotmail.com",
                  password: "123456"
                }
              }
            }
          }
        }
      },
      responses: {
        "401": {
          description: "Email/Senha incorreto"
        }
      }
    }
  },
  "/account": {
    post: {
      summary: "Cria uma conta",
      tags: [
        "Login/Session"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: " "
            },
            examples: {
              Login: {
                description: "role pode ser ADMIN ou USER",
                value: {
                  name: "Nome do cliente",
                  email: "root_dev_rm@hotmail.com",
                  password: "123456",
                  role: "ADMIN"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Usu\xE1rio criado",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "Usu\xE1rio criado": {
                  value: {
                    message: "Usu\xE1rio criado !"
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "j\xE1 existe um usu\xE1rio com esse email",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "usu\xE1rio j\xE1 existe": {
                  value: {
                    message: "Usu\xE1rio com este email j\xE1 existe"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/sessions": {
    post: {
      summary: "Sess\xE3o do usu\xE1rio",
      tags: [
        "Login/Session"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      responses: {
        "401": {
          description: "Token n\xE3o enviado, fa\xE7a seu login novamente"
        },
        "200": {
          description: "OK"
        }
      }
    }
  },
  "/forgotPassword": {
    post: {
      summary: "Recuperar senha do usu\xE1rio",
      description: "Neste rota ser\xE1 enviado o email do usu\xE1rio para criar uma valida\xE7\xE3o para ele poder alterar a senha",
      tags: [
        "User"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: ""
            },
            examples: {
              "Recuperar senha": {
                value: {
                  email: "root_dev_rm@hotmail.com"
                }
              }
            }
          }
        }
      },
      responses: {
        "400": {
          description: "N\xE3o existe usu\xE1rio com este email !"
        },
        "200": {
          description: "Foi enviado um email para voc\xEA recuperar sua senha !"
        }
      }
    }
  },
  "/validateForgotPassword/{id}": {
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        schema: {
          type: "string"
        },
        description: "id para validar se o link \xE9 valido"
      }
    ],
    post: {
      summary: "Verifica se id para a recupera\xE7\xE3o de senha \xE9 v\xE1lido",
      description: "Se retornar falso nem deixe o usu\xE1rio enviar a solicita\xE7\xE3o de senha",
      tags: [
        "User"
      ],
      responses: {
        "200": {
          description: "link valido ou invalido",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "Link V\xE1lido": {
                  value: {
                    isValid: true,
                    message: "Link V\xE1lido !"
                  }
                },
                "Link Inv\xE1lido": {
                  value: {
                    isValid: false,
                    message: "Link Inv\xE1lido !"
                  }
                },
                "Link Expirado": {
                  value: {
                    isValid: false,
                    message: "Link Expirado !"
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "id n\xE3o foi enviado",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "sem o id no path": {
                  value: {
                    message: "Enviar o id !"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/redefine-password": {
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        schema: {
          type: "string"
        },
        description: "id do link"
      }
    ],
    post: {
      summary: "Checa as informa\xE7\xF5es passadas e altera a senha do usu\xE1rio",
      description: "Est\xE1 rota \xE9 respons\xE1vel alterar a senha do usu\xE1rio",
      tags: [
        "User"
      ],
      requestBody: {
        description: "A senha deve conter pelo menos 1 caractere em mai\xFAsculo e um n\xFAmero",
        content: {
          "application/json": {
            schema: {
              $ref: ""
            },
            examples: {
              "Alterar Senha": {
                value: {
                  password: "Password1",
                  verifyPassword: "Password1"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "senha atualizada ou link expirado",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "senha atualizada": {
                  value: {
                    isValid: true,
                    message: "Senha alterada com sucesso !"
                  }
                },
                "link Expirado": {
                  value: {
                    isValid: false,
                    message: "Link Expirado !"
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "id do link n\xE3o \xE9 v\xE1lido",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "link n\xE3o existe": {
                  value: {
                    message: "Link n\xE3o existe !"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/domain/create": {
    post: {
      summary: "Cria um novo dom\xEDnio",
      tags: [
        "Domain"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: ""
            },
            examples: {
              "Criar Dom\xEDnio": {
                value: {
                  domain: "example.com"
                }
              }
            }
          }
        }
      },
      responses: {
        "201": {
          description: "Dom\xEDnio criado !",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                Sucesso: {
                  value: {
                    message: "Dom\xEDnio criado !"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/domain/get": {
    get: {
      summary: "Obt\xE9m uma lista de dom\xEDnios",
      tags: [
        "Domain"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "page",
          in: "query",
          schema: {
            type: "integer",
            default: 1,
            description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "pageSize",
          in: "query",
          schema: {
            type: "integer",
            default: 10,
            description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "filter",
          in: "query",
          schema: {
            type: "string",
            description: "Filtro para busca (deve ser uma string, pode ser opcional)."
          },
          required: false
        }
      ],
      responses: {
        "200": {
          description: "Lista de dom\xEDnios retornada com sucesso!",
          content: {
            "application/json": {
              example: {
                data: [
                  {
                    id: "e95662d6-7ab0-4934-b278-b4ebfc9d63a4",
                    userId: "eeaaac70-4141-4eb7-98ce-af660fe4bcfd",
                    domain: "example.com",
                    status: "DISCONNECTED",
                    updatedAt: "2024-07-06T23:46:48.194Z",
                    createdAt: "2024-07-06T23:46:48.194Z"
                  }
                ],
                meta: {
                  page: 1,
                  pageSize: 10,
                  total: 1,
                  totalPages: 1
                }
              }
            }
          }
        }
      }
    }
  },
  "/domain/update/{id}": {
    put: {
      summary: "Atualiza um dom\xEDnio existente",
      tags: [
        "Domain"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID do dom\xEDnio a ser atualizado"
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                domain: {
                  type: "string",
                  description: "Novo nome do dom\xEDnio",
                  minLength: 1
                }
              },
              required: [
                "domain"
              ]
            },
            examples: {
              "Atualizar Dom\xEDnio": {
                value: {
                  domain: "updatedexample.com"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Dom\xEDnio atualizado com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                }
              },
              examples: {
                Sucesso: {
                  value: {
                    message: "Dom\xEDnio atualizado com sucesso!"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/domain/delete/{id}": {
    delete: {
      summary: "Exclui um dom\xEDnio existente",
      tags: [
        "Domain"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID do dom\xEDnio a ser exclu\xEDdo"
        }
      ],
      responses: {
        "200": {
          description: "Dom\xEDnio exclu\xEDdo com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/email/create": {
    post: {
      summary: "Cria um novo email",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "Endere\xE7o de email",
                  minLength: 1
                }
              },
              required: [
                "email"
              ]
            },
            examples: {
              "Criar Email": {
                value: {
                  email: "example@example.com"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Email criado com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                },
                example: {
                  Sucesso: {
                    value: {
                      message: "Email criado com sucesso!"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/email/get": {
    get: {
      summary: "Obt\xE9m uma lista de emails",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "page",
          in: "query",
          schema: {
            type: "integer",
            default: 1,
            description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "pageSize",
          in: "query",
          schema: {
            type: "integer",
            default: 10,
            description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "filter",
          in: "query",
          schema: {
            type: "string",
            description: "Filtro para busca (deve ser uma string, pode ser opcional)."
          },
          required: false
        }
      ],
      responses: {
        "200": {
          description: "Lista de emails retornada com sucesso!",
          content: {
            "application/json": {
              schema: {},
              examples: {
                Sucesso: {
                  value: {
                    data: [
                      {
                        id: "db49ac9c-e223-418f-b68f-0926645a6ce9",
                        userId: "eeaaac70-4141-4eb7-98ce-af660fe4bcfd",
                        email: "example@example.com",
                        status: "DISCONNECTED",
                        updatedAt: "2024-07-06T23:51:05.328Z",
                        createdAt: "2024-07-06T23:51:05.328Z"
                      }
                    ],
                    meta: {
                      page: 1,
                      pageSize: 10,
                      total: 1,
                      totalPages: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/email/update/{id}": {
    put: {
      summary: "Atualiza um email existente",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID do email a ser atualizado"
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "Novo endere\xE7o de email",
                  minLength: 1
                }
              },
              required: [
                "email"
              ]
            },
            examples: {
              "Atualizar Email": {
                value: {
                  email: "updated@example.com"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Email atualizado com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                },
                example: {
                  Sucesso: {
                    value: {
                      message: "Email atualizado com sucesso!"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/email/delete/{id}": {
    delete: {
      summary: "Exclui um email existente",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID do email a ser exclu\xEDdo"
        }
      ],
      responses: {
        "200": {
          description: "Email exclu\xEDdo com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                }
              },
              example: {
                message: "Email exclu\xEDdo com sucesso!"
              }
            }
          }
        }
      }
    }
  },
  "/email/send-email": {
    post: {
      summary: "Envia um email",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                from: {
                  type: "string",
                  description: "Remetente do email no formato 'Seu Nome <email@dominio.com>'",
                  minLength: 1
                },
                to: {
                  type: "string",
                  format: "email",
                  description: "Destinat\xE1rio do email (deve ser um endere\xE7o de email v\xE1lido)"
                },
                subject: {
                  type: "string",
                  description: "Assunto do email",
                  minLength: 1
                },
                text: {
                  type: "string",
                  description: "Corpo do email",
                  minLength: 1
                }
              },
              required: [
                "to",
                "subject",
                "text"
              ]
            },
            examples: {
              "Enviar Email": {
                value: {
                  from: "Seu Nome <seuemail@dominio.com>",
                  to: "destinatario@dominio.com",
                  subject: "Assunto do Email",
                  text: "Corpo do email aqui."
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Email enviado com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                }
              },
              example: {
                message: "Email enviado com sucesso!"
              }
            }
          }
        }
      }
    }
  },
  "/email/sended-emails": {
    get: {
      summary: "Obt\xE9m uma lista de emails enviados",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          name: "page",
          in: "query",
          schema: {
            type: "integer",
            default: 1,
            description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "pageSize",
          in: "query",
          schema: {
            type: "integer",
            default: 10,
            description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
          },
          required: false
        },
        {
          name: "filter",
          in: "query",
          schema: {
            type: "string",
            description: "Filtro para busca (deve ser uma string, pode ser opcional)."
          },
          required: false
        }
      ],
      responses: {
        "200": {
          description: "Lista de emails enviados retornada com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  emails: {
                    type: "array",
                    items: {
                      type: "string",
                      description: "Endere\xE7o de email enviado"
                    }
                  },
                  total: {
                    type: "integer",
                    description: "Total de emails enviados"
                  }
                }
              },
              example: {
                emails: [
                  "example1@example.com",
                  "example2@example.com"
                ],
                total: 2
              }
            }
          }
        }
      }
    }
  },
  "/email/send-emails": {
    post: {
      summary: "Envia emails para m\xFAltiplos destinat\xE1rios",
      tags: [
        "Email"
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                from: {
                  type: "string",
                  description: "Remetente do email no formato 'Seu Nome <email@dominio.com>'",
                  minLength: 1
                },
                to: {
                  type: "array",
                  items: {
                    type: "string",
                    format: "email",
                    description: "Destinat\xE1rio do email (deve ser um endere\xE7o de email v\xE1lido)"
                  }
                },
                subject: {
                  type: "string",
                  description: "Assunto do email",
                  minLength: 1
                },
                text: {
                  type: "string",
                  description: "Corpo do email",
                  minLength: 1
                }
              },
              required: [
                "to",
                "subject",
                "text"
              ]
            },
            examples: {
              "Enviar Emails": {
                value: {
                  from: "Seu Nome <seuemail@dominio.com>",
                  to: [
                    "destinatario1@dominio.com",
                    "destinatario2@dominio.com"
                  ],
                  subject: "Assunto do Email",
                  text: "Corpo do email aqui."
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Emails enviados com sucesso!",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensagem de sucesso"
                  }
                }
              },
              example: {
                message: "Emails enviados com sucesso!"
              }
            }
          }
        }
      }
    }
  }
};
var components = {
  schemas: {},
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }
};
var swagger_default = {
  openapi,
  info,
  servers,
  paths,
  components
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  components,
  info,
  openapi,
  paths,
  servers
});
