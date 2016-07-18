const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      //localStorage.setItem('todos', JSON.stringify(state));
      return [
        ...state,
        todo(undefined, action)
      ];
      
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      //var persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
      return state;
  }
};

//let persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

export default todos;
