export const addTodo = (list, item) => [...list, item]
export const generateId = () => Math.floor(Math.random() * 1000);
export const findById = (id, list) => list.find(item => item.id === id);
export const toggleTodo = todo => ({...todo, isComplete: !todo.isComplete });
export const updateTodo = (list, updated) => {
    const index = list.findIndex(item => item.id === updated.id);
    return [
        ...list.slice(0, index),
        updated,
        ...list.slice(index+1)
    ]
}
