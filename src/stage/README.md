# Barra de vida (Health Bar) para um jogo de luta

## Desafios Health Bar

- [x] Modelo básico com efeito de dano e cura.
- [x] Causar efeito (dano/cura) por pontos e por porcentagem do HP total ou atual.
- [x] Causar efeito (dano/cura) x constante durante determinado tempo.
- [x] Causar efeito (dano/cura) x diluído ao longo de um tempo.
- [x] Causar efeito (dano/cura) x diluído ao longo de um tempo de forma decrescente.
- [x] Feito (dano/cura) infinito.
- [x] Pausar e retomar todos os efeitos ativos e impedir ativações durante pausa.
- [x] Fronze - ignorar todos os efeitos ativos ou ativados durante determinado tempo.
- [x] Cancelar todos os efeitos ativos.
- [ ] Efeito de armatura: setar um valor que reduz X % do dano sofrindo no hit.
- [ ] BACKTIME - cancelar todos os efeitos ativos e executar novamente todos os efeitos que ocorreram nos últimos X segundos (log). Porém, na ordem inversa em que ocorreram e com efeito contrário, para produzir a sensação tempo regredindo. Toda a execução deve durar metade do tempo original (X/2 segundos), respeitando proporcionalmente, a duração de cada efeito e o intervalo de tempo entre eles. Durante o BACKTIME, absolutamente nenhuma nova ativação poderá ser iniciada.
- [ ] Aplicar ease-in-out (iniciar a lento e terminar rápido) na animação do BACKTIME.

## Fontes

- setTimeout and setInterval with pause and resume : https://gist.github.com/ncou/3a0a1f89c8e22416d0d607f621a948a9
