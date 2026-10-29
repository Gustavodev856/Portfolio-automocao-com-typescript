export interface CenarioLogin {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada: string;
}

export const listaUsuarios: CenarioLogin[] = [
  {
    descricao: 'Usuário válido',
    usuario: 'standard_user',
    senha: 'secret_sauce',
    sucesso: true,
    mensagemEsperada: 'Products',
  },
  {
    descricao: 'Usuário bloqueado',
    usuario: 'locked_out_user',
    senha: 'secret_sauce',
    sucesso: false,
    mensagemEsperada:
      'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    descricao: 'Senha incorreta',
    usuario: 'standard_user',
    senha: 'senha_errada',
    sucesso: false,
    mensagemEsperada:
      'Epic sadface: Username and password do not match any user in this service',
  },
];