# Game Design Document

Desenvolvimento de uma game de luta 2D na temática do jogo Marvel vs Capcom usando tecnologias 100% web.

## Gameplay

Segue algumas ideias:

* Os combates são entre duplas, revezando durante o combate, quem permanece no estágio lutando um-contra-um;
* O lutador quando está na reserva, recupera parte de seu HP perdido;
* Quando há uma troca, o lutador que estava na reserva pode entrar executando um chute ou algum movimento especial de acordo com condições específicas;
* Quando invoca a troca, o lutador que irá para reserva executa uma provocação (de baixo tempo) e fica vulnerável;
* Não podem haver duplas compostas pelo mesmo personagem;
* Quando um personagem tem a guarda quebrada, ele fica 1s sem poder bloquear ataques;
* Além da barra que mede o HP de cada personagem individualmente, há a barra que mede a Guard e a que mede a PW;
* A barra de Guard apesar de ser continuamente recarregada quando a guarda não está ativa, é compartilhada com todos os lutadores do mesmo time. Caso esvazie por completo, o lutador será penalizado por 1s;
* Neste intervalo, a barra não será recarregada impossibilitando o uso do bloqueio. Este recurso servirá para limitar o uso excessivo do bloqueio, e incentivar outras estratégias como a esquiva e o counter;
* A barra de PW é recarregada andando/saltando para frente, provocando, usando o counter,
* Lançar no ar: soco forte mais direcionar para baixo ao mesmo tempo;
* Agarra durante um bloqueio causa um pouco mais de dano.

## Heros (Heróis)

> check GDD-Heros.md

## Infinity Gems (Jóias do Infinito)

> check GDD-InfinityGems.md