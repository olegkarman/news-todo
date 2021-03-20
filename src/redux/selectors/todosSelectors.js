export const getTodos = (store) => store.todos;

export const getTodosById = (store, id) => {
    if (!getTodos(store)) {
        return {};
    }
    
    const todosList = getTodos(store).todosList;
    const index = todosList.findIndex(todo => todo.id === Number.parseInt(id));
    return todosList[index];
};