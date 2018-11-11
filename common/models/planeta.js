'use strict';


module.exports = function(Planeta) {
    Planeta.checkAparicoesFilmes = function(nome, cb) {
        process.nextTick(function() {
          nome = nome || 'Quantidade de filmes';
          cb(null, 'Quantidade ' + nome + ' de filmes');
        });
    };
};
