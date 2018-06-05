# R/GA SP - Teste para Desenvolvedor Mobile

## Gerlandio da Silva Lucena

###Libs utilizadas
```ruby
    pod 'Moya'
```
Essa lib é uma abstração do Alamofire, ela adiciona uma camada que permite uma organização mais padronizada de seus endpoints.

```ruby
    pod 'Reusable'
```
Essa lib permite utilizar e registrar células e labels em tableViews de forma mais simples, mesmo que seja uma tarefa simples registrar uma célula, essa lib exige um padrão de nome onde o nome da celula (Indentifier) deve o mesmo da classe.

```ruby
    pod 'SDWebImage', '~> 4.0'
```
Essa lib permite carregar imagens da web e cria um cache delas localmente.

```ruby
    pod 'R.swift'
```
Essa lib mapeia a estrutura de seu resources para criar referências staticas em seu código, evitando erros de digitação.

```ruby
    pod 'RxSwift'
    pod 'RxCocoa'
    pod 'RxRealm'
```
Essa lib permite utilizar programação reactiva em seu projeto

```ruby
    pod 'RealmSwift'
```
Essa lib utiliza uma abstração do CoreData que permite salvar e recuperar objetos de forma simples e descomplicada.

###Execução

..* Mude o BundleID do projeto para permitir a execução.
..* Execute `pod install` na pasta raiz da aplicação
..* Verifique se o schema correto esta selecionado
..* Execute a aplicação

### O código

Foi bem difícil relembrar a utilização de programação reativa, inicialmente desenvolvi a tela inicial como padrão e posteriormente fui migrando o pattern para MVVM, onde rolou o segundo desafio. Quando MVVM é conhecido somente em sua base e teoria é muito difícil de saber de fato se seu código esta correto.

Sem dúvidas feri esse pattern de N formas possíveis, mas foi muito gratificante ver minha Massive View Controller diminuir de tamanho conforme evoluia no projeto.

O layout ficou muito simple e se tivesse mais tempo tentaria deixar a aplicação mais sexy aos olhos do usuário, porém as poucas informações diposníveis não davam muita vantagem.

Se houvesse mais tempo procuraria alguma feature que pudesse agregar a esta tela, aparentemente somente cadastrar informações não ajuda muito em questão de proporcionar a melhor experiência, mas sem dúvida, estou mal acostumado com UX/Designer de boa qualidade a minha volta...rsrsrs

Muito obrigado pela chance de aprender um pouco mais sobre esse pattern e me desculpem se cometi alguma gafe imperdoável.

Me mandem os feedbacks para que possa melhorar e passar na próxima por favor.



