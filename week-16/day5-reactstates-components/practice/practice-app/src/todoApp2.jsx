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

  itemIdx = (e, items) => {
    const { target } = e;
    const li = target.closest('li'); 
    const id = parseInt(li.getAttribute('data-id'), 10);
    return items.findIndex((item) => item.id === id);
  }

  doneClick = (e) => {
    const { todo, done } = this.state;
    const idx = this.itemIdx(e, todo);
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
    const idx = this.itemIdx(e, done);
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

