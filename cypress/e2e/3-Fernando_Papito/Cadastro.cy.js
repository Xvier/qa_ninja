import SignupPage from '../../pages/SignupPage'

describe('Cadastro', () => {
  it('Usuário deve se tornar um entregador', () => {
    var entregador = {
      //isso é um método criado para facilitar as chamadas
      nome: 'Thiago Jose',
      cpf: '00000400484',
      email: 'josthiago1@gmail.com.nr',
      whats: '4487458749',
      endereco: {
        //esse campo é um objeto que vai ser referenciado
        cep: '04534011',
        rua: 'Rua Joaquim Floriano',
        numero: '112',
        complento: 'apt 110',
        bairro: 'Itaim Bibi',
        cidade_uf: 'São Paulo/SP',
      },
      metodo_entrega: 'Moto',
      cnh: 'cnh-digital.jpg',
    }

    SignupPage.go()
    SignupPage.filForms(entregador)
    SignupPage.submit()
    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.' //Foi adicionado aqui para não ter que colocar o texto no código abaixo
    SignupPage.modalContextShouldbe(expectedMessage)
  })
})
