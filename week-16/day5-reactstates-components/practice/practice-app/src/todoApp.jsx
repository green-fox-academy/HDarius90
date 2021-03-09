import React from 'react';

export default class ToDoApp extends React.Component {
  state = {
    todo: [{
      id: 1,
      text: 'Etesd meg a majmot',
      prio: 2
    }, {
      id: 2,
      text: 'Vegyél tejet',
      prio: 1
    }],
    done: [{
      id: 3,
      text: 'Mentorálj másokat',
      prio: 1
    }, {
      id: 4,
      text: 'Aludj 8 órát',
      prio: 2
    }]
  }

  constructor() {
    super();
  }

  doneClick = (e) => {
    const { todo, done } = this.state;
    const { target } = e;
    const li = target.closest('li'); 
    const id = parseInt(li.getAttribute('data-id'), 10);
    const idx = todo.findIndex((item) => item.id === id);
    this.setState({
      done: [
        ...done,
        todo[idx]
      ],
      todo: [
        ...todo.filter((_, i) => i !== idx)
      ]
    });
  }
  
  deleteClick = (e) => {
    const { done } = this.state;
    const { target } = e;
    const li = target.closest('li'); 
    const id = parseInt(li.getAttribute('data-id'), 10);
    const idx = done.findIndex((item) => item.id === id);
    this.setState({
      ...this.state,
      ...{
        done: [
          ...done.filter((_, i) => i !== idx)
        ]
      }
    });
  }

  render() {
    const { state, doneClick, deleteClick } = this;
    const { todo, done } = state;
    return (
      <div className="container">
        <h2>Teendők</h2>
        <ul>
          {todo.sort((a, b) => a.prio - b.prio).map(({ text, id }) => (
            <ToDo
              text={text}
              clickHandler={doneClick}
              id={id}
              key={id}
              />
          ))}
        </ul>
        <h2>Kész teendők</h2>
        <ul>
          {done.sort((a, b) => a.prio - b.prio).map(({ text, id }) => (
            <DoneToDo
              text={text}
              clickHandler={deleteClick}
              id={id}
              key={id}
              />
          ))}
        </ul>
      </div>
    );
  }
}

const ToDo = ({ text, clickHandler, id }) => {
  return (
    <li data-id={id}>
      {text}
      <button onClick={clickHandler}>Kész</button>
    </li>
  );
};

const DoneToDo = ({ text, clickHandler, id }) => {
  return (
    <li data-id={id}>
      {text}
      <button onClick={clickHandler}>Törlés</button>
    </li>
  );
};

