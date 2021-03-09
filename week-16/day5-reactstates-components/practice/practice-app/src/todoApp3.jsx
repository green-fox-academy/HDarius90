import React, { useState } from 'react';

const defaultTodo = [{
  id: 1,
  text: 'Etesd meg a majmot',
  prio: 2
}, {
  id: 2,
  text: 'Vegyél tejet',
  prio: 1
}];

const defaultDone = [{
  id: 3,
  text: 'Mentorálj másokat',
  prio: 1
}, {
  id: 4,
  text: 'Aludj 8 órát',
  prio: 2
}];

export default function ToDoApp() {
  const [todo, setTodo] = useState(defaultTodo);
  const [done, setDone] = useState(defaultDone);
  
  const itemIdx = (e, items) => {
    const { target } = e;
    const li = target.closest('li'); 
    const id = parseInt(li.getAttribute('data-id'), 10);
    return items.findIndex((item) => item.id === id);
  }

  const doneClick = (e) => {
    const idx = itemIdx(e, todo);
    setTodo([...todo.filter((_, i) => i !== idx)]);
    setDone([...done, todo[idx]]);
  };
  
  const deleteClick = (e) => {
    const idx = itemIdx(e, done);
    setDone([...done.filter((_, i) => i !== idx)]);
  };
  
  return (
    <div className="container">
      <List
        title="Teendők"
        Target={ToDo}
        items={todo}
        clickHandler={doneClick}
        />
      <List
        title="Kész teendők"
        Target={DoneToDo}
        items={done}
        clickHandler={deleteClick}
        />
    </div>
  );
}

const List = ({ title, Target, items, clickHandler }) => (
  <>
    <h2>{title}</h2>
    <ul>
      {items
        .sort((a, b) => a.prio - b.prio)
        .map(({ text, id }) => (
          <Target
            text={text}
            clickHandler={clickHandler}
            id={id}
            key={id}
            />
        ))}
    </ul>
  </>
);

const ToDo = ({ text, clickHandler, id }) => (
  <li data-id={id}>
    {text}
    <button onClick={clickHandler}>Kész</button>
  </li>
);

const DoneToDo = ({ text, clickHandler, id }) => (
  <li data-id={id}>
    {text}
    <button onClick={clickHandler}>Törlés</button>
  </li>
);

