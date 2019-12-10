export const todo = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        default:
            return state;
    }

}