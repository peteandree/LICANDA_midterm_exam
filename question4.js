// Task list (Array-based database)
let tasks = [];
let taskId = 1; // Auto-increment ID

// CREATE - Add a new task
function addTask(name, description) {
    const newTask = {
        id: taskId++, // Assign a unique ID
        name,
        description
    };
    tasks.push(newTask);
    console.log(`Task added: ${name}`);
}

// READ - View all tasks
function viewTasks() {
    console.log("\nTask List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

// UPDATE - Modify an existing task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task ID ${id} updated.`);
    } else {
        console.log(`Task ID ${id} not found.`);
    }
}

// DELETE - Remove a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task ID ${id} deleted.`);
    } else {
        console.log(`Task ID ${id} not found.`);
    }
}

// --- Test CRUD Functions ---

addTask("Learn JavaScript", "Study array methods and closures");
addTask("Build a project", "Create a CRUD app using JavaScript");

viewTasks();

updateTask(1, "Master JavaScript", "Deep dive into JS concepts");

viewTasks();

deleteTask(2);

viewTasks();
