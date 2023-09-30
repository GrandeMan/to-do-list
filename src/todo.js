class Todo {
    constructor(title, descrption, dueDate, priority, notes = [], checklist = []) {
        this.title = title;
        this.descrption = descrption;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false;
    }

    markAsComplete() {
        this.completed = true;
    }

    editTodo({title, descrption, dueDate, priority, notes, checklist}) {
        this.title = title;
        this.descrption = descrption;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

    addNotes(newNotes) {
        this.notes.push(newNotes);
    }

    addItemToChecklist(item) {
        this.checklist.push({text: item, checked: false});
    }

    markChecklistItemComplete(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist[index].checked = true;
        }
    }

    deleteChecklistItem(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist.splice(index, 1);
        }
    }
}

export default Todo;

