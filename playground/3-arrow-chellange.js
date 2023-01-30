const tasks = {
    tasks: [{
            text: 'Uxla',
            completed: true
        },
        {
            text: 'Oqat ye',
            completed: false
        },
        {
            text: 'Otir',
            completed: false
        }
    ],
    getTaskTodo() {
        return this.tasks.filter((task) => task.completed === false);
    }
};