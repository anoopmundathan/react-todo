const baseUrl = 'http://localhost:8080/todos';

export const fetchTodos = () => {
    return fetch(baseUrl)
        .then(response => response.json());
}