// Inicialização das variáveis
let items = document.querySelectorAll('.item-active');  // Seleciona todas as imagens de carros
let active = 0;  // Define o índice inicial como 0
let prevButton = document.querySelector('.arrows button:nth-child(1)');  // Botão anterior
let nextButton = document.querySelector('.arrows button:nth-child(2)');  // Botão próximo

// Verifica se as imagens e botões estão presentes antes de adicionar interatividade
if (items.length > 0) {
  items[active].classList.add('active');  // Marca o primeiro item como ativo
}

// Função para atualizar o item ativo
function updateActiveItem(newIndex) {
  // Verifica a direção da animação (se está indo para a esquerda ou direita)
  let direction = newIndex > active ? 'exit-left' : 'exit-right';

  // Remove a classe 'active' do item atual e aplica a animação de saída
  items[active].classList.remove('active');
  items[active].classList.add(direction);

  // Remove a classe de animação após a transição para garantir que ela não interfira
  setTimeout(() => {
    items[active].classList.remove(direction);
  }, 500); // Espera o tempo da transição

  // Atualiza o índice ativo
  active = newIndex;

  // Adiciona a classe 'active' ao novo item e remove quaisquer animações de saída
  items[active].classList.add('active');
  items[active].classList.remove('exit-left', 'exit-right');
}

// Verifica se os botões de navegação existem antes de adicionar os eventos
if (prevButton && nextButton) {
  prevButton.onclick = () => {
    // Atualiza o índice para o item anterior
    let newIndex = active - 1 < 0 ? items.length - 1 : active - 1;
    updateActiveItem(newIndex);
  };

  nextButton.onclick = () => {
    // Atualiza o índice para o próximo item
    let newIndex = active + 1 >= items.length ? 0 : active + 1;
    updateActiveItem(newIndex);
  };
}
