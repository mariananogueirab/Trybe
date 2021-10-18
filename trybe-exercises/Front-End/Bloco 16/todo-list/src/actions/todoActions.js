export const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS',
}

// action creators
export function addTodo(todo) {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: todo, //recebe um objeto quando a função é chamada. com o id e o texto do todo
  };
}

export function removeTodo(todo) {
  return {
    type: TODO_ACTIONS.REMOVE_TODO,
    payload: todo,
  };
}

export function toggleTodo(todo) {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    payload: todo,
  };
}

export function clearTodos() {
  return {
    type: TODO_ACTIONS.CLEAR_TODOS,
  };
}
