class ToDo {
    constructor() {
        this.tasks = [];
    };

    create(title, description) {
        this.tasks.push({
            title: title,
            id: this.tasks.length + 1,
            date: new Date(),
            description: description,
            isCompleted: false,
            priority: 0,
        })
    };

    delete(id) { 
        this.tasks = this.tasks.filter((item) => item.id !== id)

    };

    edit(task) {
        const { title, id, date, description, isCompleted, priority } = task;
        this.tasks = this.tasks.map((item) => {
            if(item.id === id) {
                return {
                    title, 
                    id, 
                    date, 
                    description, 
                    isCompleted,
                    priority,
                };
            }
            return item; 
        });
    }

    completed(id) {this.tasks = this.tasks.map((item) => {
        if(item.id === id) {
            return {  
                ...item,          
                isCompleted: true
            };
        }
        return item; 
    });

    };

    showTasks() {this.tasks.forEach((item) => {
        console.log(item);})
    };

    prioritySort() {
        this.task = this.tasks.sort((prior_a, prior_b) => {
            return prior_a.priority - prior_b.priority;
        });
    };
}

const list = new ToDo();

// list.create('первая-list', 'новая задача');
// list.create('вторая-list', 'проверка');
// list.create('последняя-list', 'крайняя задача');
// list.create('восьмая-list', 'отмена проекта');

// list.completed(2)
// list.delete(2);
// list.showTasks();

class PlusToDo extends ToDo {
    constructor() {
        super();
    };

    prioritySort() {
        this.task = this.tasks.sort((prior_a, prior_b) => {
            return prior_b.priority - prior_a.priority;
        });
    };

    editPriority(id, priority) {
        this.tasks = this.tasks.map((item) => {
            if(item.id === id && Number.isInteger(priority)) {
                return {
                    ...item,
                    priority: priority,
                };
            };
            return item;
        })
    }

    dateSorting() {
        this.tasks = this.tasks.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
        });

    };

    titleFilter(name) {
        this.tasks = this.tasks.filter((item) => {
        return item.title.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });

    };

}
const list2 = new PlusToDo();

list2.create('третья-list2', 'старая задача');
list2.create('пятая-list2', 'новая задача');
list2.create('вторая-list2', 'переделать задача');
list2.create('десятая-list2', 'удалить задача');
list2.create('пятая-list2', 'дублирование');
list2.create('Вторник-list2', 'заменить');


list2.edit(
    {
        title: 'вторая-list2',
        id: 3,
        date: '2023-01-24T14:44:53.044Z',
        description: 'переделать задача',
        isCompleted: false,
        priority: 1,

    }
);

list2.edit(
    {
        title: 'пятая-list2',
        id: 2,
        date: '2024-01-24T14:44:53.044Z',
        description: 'новая задача-переделать задача',
        isCompleted: false,
        priority: 2,

    }
);

list2.dateSorting();
// list2.titleFilter('вто');
list2.editPriority(3, 4);
list2.prioritySort();
list2.showTasks();