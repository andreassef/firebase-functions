# Teste para Lutti
> Um singelo algoritmo para simular uma feature que pega palavras indesejadas e as converte em caracteres aleatórios
>
## Caso de uso:
> Uma aplicação recebe diversas mensagens de seus usuários, contudo algumas palavras são indesejáveis, como palavras de baixo calão e afins.
> Para solucionar esse problema, foi solicitado ao desenvolvedor que criasse um algoritmo para captar essas palavras e as mascarasse.

> O desenvolvedor, tendo em mãos diversas formas de solucionar esse problema, decidiu usar o Firebase da Google. 
> Valendo-se do banco de dados Realtime database e da ferramenta Cloud functions, o desenvolvedor criou um algoritmo que cria um usuario e seu comentario no banco realtime, e uma trigger que escuta cada nova inserção no banco. Ao haver uma nova inserção no banco de dados, a trigger é disparada e avalia o texto do comentário, ao encontrar palavras  de baixo calão o algoritmo a substitui por caracteres aleatórios.

## Observação
> O algoritmo foi desenvolvido em ambiente local, com os emuladores de servidor disponibilizados pelo próprio firebase.
> Att, André Assef, dev.