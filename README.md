Requisitos
Os requisitos são divididos de acordo com a ordem de prioridade. Assim
como em equipes ágeis, temos o MVP (mínimo produto viável) com as
features mais importantes e que devem ser entregues antes das demais
menos prioritárias (Releases).

Requisito 1
MVP

Criação e listagem de usuários “admin”
Usuários “admin” possuem um perfil que permite a
criação de usuários do tipo “recrutador”.

- Criar usuário com tipo “admin” e os seguintes
  campos: id, nome, username (deve ser único),
  senha.
- Listar usuários de todos os tipos

Requisito 2
MVP

Login de usuários

Usuários de qualquer tipo podem fazer o login na
aplicação.

- Informar username e senha.
- Retornar um token JWT na resposta.

Requisito 3
MVP

Cadastro e listagem de usuários “recrutador”
Usuários do tipo “recrutador” podem criar vagas de
emprego no sistema. Apenas usuários “admin”
podem cadastrar recrutadores.

- Criar usuário com tipo “recrutador” e os
  seguintes campos: id, nome, username (único),
  senha, nome da empresa.
- Listar usuários do tipo “recrutador”.

Requisito 4
MVP

Cadastro e listagem de usuários “candidato”
Usuários do tipo “candidato” podem pesquisar e se
candidatar em vagas ofertadas por recrutadores.
Esse tipo de usuário pode ser criado de forma aberta.

- Criar usuário com tipo “candidato” e os
  seguintes campos: id, nome, username (único),
  senha.
- Listar usuários do tipo “candidato”.

Requisito 5
MVP

Cadastro de vagas pelo recrutador
Um recrutador pode criar várias vagas. Uma vaga só
pode ter sido criada por um único recrutador. As
vagas devem ter as seguintes propriedades:

- ID
- Descrição
- Empresa
- Data limite para candidaturas
- Indicador ativo (sim/não)

- Recrutador
- Número máximo de candidatos (opcional)

Requisito 6
MVP

Aplicação de uma vaga pelo candidato
Um candidato pode se aplicar a várias vagas. Uma
vaga por ter sido escolhida por diversos candidatos.
Para cada candidatura, armazenar:

- Data da aplicação
- Indicador de sucesso (se o candidato foi
  selecionado ou não).
  Um candidato NÃO pode aplicar a uma vaga se:
- A data limite da vaga já foi alcançada
- A vaga não está ativa
- A vaga já está lotada de candidatos, quando
  tiver número máximo definido
- O candidato já se aplicou a mesma vaga
- O candidato for do tipo “admin” ou “recrutador”

Requisito 7
MVP

Listagem de vagas do candidato
O candidato poderá listar as vagas em que ele se
submeteu para aplicação.

Requisito 8
MVP

Listagem de candidatos de uma vaga
Um usuário do tipo “recrutador” poderá listar todos os
candidatos aplicados a uma determinada vaga.

- O recrutador só poderá listar informações das
  vagas que ele criou.

Requisito 9
MVP

Listagem de vagas e seus candidatos
Um usuário do tipo “recrutador” poderá listar todas
as vagas que ele criou junto à informação dos
candidatos associados a cada vaga.

- O recrutador só poderá listar informações das
  vagas que ele criou.

Requisito 10
MVP

Desativação/Ativação de uma vaga
Um usuário do tipo “recrutador” poderá desativar
uma vaga ativa ou ativar uma vaga desativada.
Só poderão ser desativadas as vagas que estiverem
com status “ativo”.
Só poderão ser ativadas as vagas que estiverem com
status “não ativo” e dentro da data limite para
candidaturas.

Requisito 11
Release

Exclusão de uma vaga
Um usuário do tipo “recrutador” poderá excluir uma
vaga. Só poderão ser excluídas as vagas que forem
do mesmo recrutador.
Ao excluir uma vaga, as candidaturas já cadastradas
também devem ser excluídas.

Requisito 12
Release

Relatórios de pesquisa sobre vagas
Um usuário do tipo “admin” poderá listar vagas de
todos os recrutadores, aplicando os possíveis filtros:

- Por data
- Por recrutador
- Por indicador ativo (sim/não)
  Além disso, será possível listar as seguintes vagas:
- Que não possuem candidatos
- Que estão lotadas de candidatos
