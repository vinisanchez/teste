// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo
}

// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
  var paragrafo = document.getElementById(idParagrafo);
  paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo
}

// Função para exibir o parágrafo ao passar o mouse sobre o h2
function exibirParagrafo(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    paragrafo.classList.add("visivel"); // Adiciona a classe para mostrar o parágrafo
    paragrafo.parentElement.nextElementSibling.classList.add("visivel"); // Exibe a borda animada
}

// Função para manter o parágrafo visível enquanto o mouse estiver sobre ele
function manterVisivel(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    paragrafo.classList.add("visivel"); // Adiciona a classe para manter o parágrafo visível
    paragrafo.parentElement.nextElementSibling.classList.add("visivel"); // Exibe a borda animada
}

// Função para ocultar o parágrafo ao retirar o mouse do h2
function ocultarParagrafo(idParagrafo) {
    var paragrafo = document.getElementById(idParagrafo);
    if (!paragrafo.matches(":hover")) {
        paragrafo.classList.remove("visivel"); // Remove a classe para ocultar o parágrafo se não estiver com o mouse sobre ele
        paragrafo.parentElement.nextElementSibling.classList.remove("visivel"); // Oculta a borda animada
    }
}

// Event listener para manter o parágrafo visível enquanto o mouse estiver sobre ele
document.querySelectorAll('.paragrafo').forEach(item => {
    item.addEventListener('mouseover', event => {
        manterVisivel(event.target.id);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.container-fluid').classList.add('animacao-aparecer');
});


    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            var titulo = document.querySelector('.sectionup .titulo');
            var botao = document.querySelector('.sectionup #botao');
            var subtitle = document.querySelector('.sectionup .subtitle');

            titulo.classList.add('show');
            botao.classList.add('show');
            subtitle.classList.add('show');
        }, 2000); // 2000 milissegundos = 2 segundos
    });


    // Esperar até que o conteúdo da página seja carregado
document.addEventListener('DOMContentLoaded', function() {
  // Selecionar os elementos h1 e h2
  var titulo = document.querySelector('.titulo');
  var subtitle = document.querySelector('.subtitle');

  // Adicionar a classe para iniciar a animação após 2 segundos para o h1
  setTimeout(function() {
    titulo.classList.add('animacao-slide');
    titulo.style.visibility = 'visible'; // Torna o elemento visível ao iniciar a animação
  }, 2000); // 2000 milissegundos (2 segundos)

  // Adicionar a classe para iniciar a animação após 2.5 segundos para o h2
  setTimeout(function() {
    subtitle.classList.add('animacao-zoom');
    subtitle.style.visibility = 'visible'; // Torna o elemento visível ao iniciar a animação
  }, 2500); // 2500 milissegundos (2.5 segundos)
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector(".titulo").classList.add("animacao-slide");
  }, 1000); // 1 segundo de atraso

  setTimeout(function() {
      document.querySelector(".subtitle").classList.add("animacao-slide");
  }, 2000); // 2 segundos de atraso

  setTimeout(function() {
      document.querySelector(".texto2").classList.add("animacao-fade");
  }, 3000); // 3 segundos de atraso
}); 


    document.addEventListener("DOMContentLoaded", function() {
        // Função para verificar se um elemento está visível na janela de visualização
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Função para adicionar animações quando o elemento entra na janela de visualização
        function handleScroll() {
            const elements = document.querySelectorAll('.hidden');
            elements.forEach(function(el) {
                if (isElementInViewport(el)) {
                    el.classList.remove('hidden');
                    el.classList.add(el.dataset.animation);
                }
            });
        }

        // Adicionar a classe hidden aos elementos e definir o tipo de animação
        document.querySelectorAll('.oque, .h01, .h02, .h03, .h04, .h05').forEach(function(el) {
            el.classList.add('hidden');
            el.dataset.animation = 'animacao-slide';
        });
        document.querySelectorAll('.p-custom').forEach(function(el) {
            el.classList.add('hidden');
            el.dataset.animation = 'animacao-fade';
        });

        // Adicionar o ouvinte de rolagem
        window.addEventListener('scroll', handleScroll);

        // Chamar a função handleScroll para verificar a posição inicial dos elementos
        handleScroll();
    });


    document.addEventListener("DOMContentLoaded", function() {
      // Função para verificar se um elemento está visível na janela de visualização com uma margem
      function isElementInViewport(el, offset = 0) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 - offset &&
              rect.left >= 0 - offset &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
          );
      }

      // Função para adicionar animações quando o elemento entra na janela de visualização
      function handleScroll() {
          const elements = document.querySelectorAll('.hidden');
          elements.forEach(function(el) {
              let offset = el.classList.contains('img') ? 200 : 0; // Adiciona uma margem de 200px para a imagem
              if (isElementInViewport(el, offset)) {
                  el.classList.remove('hidden');
                  el.classList.add(el.dataset.animation);
              }
          });
      }

      // Adicionar a classe hidden aos elementos e definir o tipo de animação
      document.querySelectorAll('.titulo3, .titulo4, .titulo5, .paragrafo, .img, .card, #querocontratar').forEach(function(el) {
          el.classList.add('hidden');
          el.dataset.animation = 'animacao-slide';
      });

      // Adicionar o ouvinte de rolagem
      window.addEventListener('scroll', handleScroll);

      // Chamar a função handleScroll para verificar a posição inicial dos elementos
      handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar se um elemento está visível na janela de visualização
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para adicionar animações quando o elemento entra na janela de visualização
    function handleScroll() {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.remove('hidden');
                el.classList.add(el.dataset.animation);
            }
        });
    }

    // Adicionar a classe hidden aos elementos e definir o tipo de animação
    document.querySelectorAll('.titulo8, .paragrafo, .card, #querocontratar').forEach(function(el) {
        el.classList.add('hidden');
        el.dataset.animation = 'animacao-slide';
    });

    // Adicionar o ouvinte de rolagem
    window.addEventListener('scroll', handleScroll);

    // Chamar a função handleScroll para verificar a posição inicial dos elementos
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function() {
  // Função para verificar se um elemento está visível na janela de visualização com uma margem
  function isElementInViewport(el, offset = 0) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 - offset &&
          rect.left >= 0 - offset &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
      );
  }

  // Função para adicionar animações quando o elemento entra na janela de visualização
  function handleScroll() {
      const elements = document.querySelectorAll('.paragrafo');
      elements.forEach(function(el) {
          let offset = window.innerWidth <= 767 ? 0 : 100; // Sem margem no celular, 100px de margem em desktops
          if (isElementInViewport(el, offset)) {
              el.classList.add('visible');
          }
      });
  }

  // Adicionar a classe hidden aos parágrafos
  document.querySelectorAll('.paragrafo').forEach(function(el) {
      if (window.innerWidth > 767) {
          el.classList.add('hidden');
      }
  });

  // Adicionar o ouvinte de rolagem
  window.addEventListener('scroll', handleScroll);

  // Chamar a função handleScroll para verificar a posição inicial dos elementos
  handleScroll();
});

