const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];
  
  const ul = document.querySelector('ul');
  const liRemove = document.querySelector('li');
  liRemove.remove();
  
  for (let element of planetData) {
    if (element.asteroid) {
      const li = document.createElement('li');
      li.classList.add(`${element.category}`);
      li.textContent = element.content;
      ul.appendChild(li);
    }
  }