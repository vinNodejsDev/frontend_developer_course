const tasks = [
    {
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c1288e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function (arrayOfTasks) {
    const objOfTasks = arrayOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});
    let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';
    console.log(lastSelectedTheme)

    const themes = {
        default: {
            '--base-text-color': '#212529',
            '--header-bg': '#007bff',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#007bff',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#0069d9',
            '--default-btn-border-color': '#0069d9',
            '--danger-btn-bg': '#dc3545',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#bd2130',
            '--danger-btn-border-color': '#dc3545',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#80bdff',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
        },
        dark: {
            '--base-text-color': '#212529',
            '--header-bg': '#343a40',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#58616b',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#292d31',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#b52d3a',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#88222c',
            '--danger-btn-border-color': '#88222c',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
        light: {
            '--base-text-color': '#212529',
            '--header-bg': '#fff',
            '--header-text-color': '#212529',
            '--default-btn-bg': '#fff',
            '--default-btn-text-color': '#212529',
            '--default-btn-hover-bg': '#e8e7e7',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#f1b5bb',
            '--danger-btn-text-color': '#212529',
            '--danger-btn-hover-bg': '#ef808a',
            '--danger-btn-border-color': '#e2818a',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
    };


    // Elements UI
    const listContainer = document.querySelector(
        '.task-list-section .list-group'
    );
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const themeSelect = document.getElementById('themeSelect');


    // Events
    setTheme(lastSelectedTheme);
    renderAllTasks(objOfTasks);
    form.addEventListener("submit", onFormSubmitHandler);
    listContainer.addEventListener("click", onDeleteHandler);
    listContainer.addEventListener("click", onEditHandler);
    themeSelect.addEventListener("change", onThemeSelect);

    // Functions
    function renderAllTasks(tasksList) {
        if(!tasksList) {
            console.error('Please provide a list of tasks');
            return;
        }

        const fragment = document.createDocumentFragment();

        Object.values(tasksList).forEach(task => {
            const li = listItemTemplate(task);
            fragment.appendChild(li);
        });
        listContainer.appendChild(fragment);
    }

    function listItemTemplate({_id, title, body}={}) {
        const li = document.createElement('li');
        li.classList.add(
            'list-group-item',
            'd-flex',
            'align-items-center',
            'flex-wrap',
            'mt-2'
        );
        li.setAttribute('data-task-id', _id);

        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = "bold";
        span.style.width = "100%";
        span.style.marginTop = "10px";
        span.style.fontSize = "1.2em";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete task";
        deleteBtn.classList.add(
            'btn',
            'btn-danger',
            'ml-2',
            'delete-btn'
        );

        const editButton = document.createElement('button');
        editButton.innerHTML = "<i class=\"fa fa-edit\" style='margin-right: 4px'></i>Edit";
        editButton.classList.add(
            'btn',
            'btn-success',
            'ml-auto',
            'edit-btn'
        );
        // editButton.style.setProperty("padding", "20px")


        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('mt-2', 'w-100');

        li.appendChild(editButton);
        li.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(article);

        return li;
    }

    // Adding new task
    function onFormSubmitHandler(e) {
        e.preventDefault();

        if(e.target.querySelector('button').classList.contains('new_task')){
            const titleValue = inputTitle.value;
            const bodyValue = inputBody.value;

            if(!titleValue && !bodyValue) {
                alert('Please provide correct data in the form fields');
                return;
            }
            const task = createNewTask(titleValue, bodyValue);
            const listItem = listItemTemplate(task);
            listContainer.insertAdjacentElement('afterbegin', listItem);
            form.reset();
        }

    }

    function createNewTask(title, body) {
        const newTask = {
            _id: Math.ceil(Math.random()*(10**13)),
            title,
            body,
            completed: false
        };
        objOfTasks[newTask._id] = newTask;
        return {...newTask};
    }

    // Deleting task
    function onDeleteHandler({ target }) {
        if(target.classList.contains('delete-btn')) {
            const parent = target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            // console.log(id);
            const confirmed = deleteTask(id);
            deleteTaskFromHtml(parent, confirmed);
        }
    }

    function deleteTask(id) {
        const {title} = objOfTasks[id];
        const isConfirmed = confirm(`Are you sure you want to delete task: \n ${title}`);
        if (isConfirmed) {
            delete objOfTasks[id];
            return isConfirmed
        }
        return isConfirmed;
    }

    function deleteTaskFromHtml(el, confirmed) {
        if (!confirmed) return;
        el.remove();
    }

    // Edit task
    function onEditHandler(e) {
        e.preventDefault();
        if (e.target.classList.contains('edit-btn')) {
            const parent = e.target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            editTask(id, parent);
        }
    }

    function editTask(id, parent) {
        const {title, body} = objOfTasks[id];
        inputTitle.value = title;
        inputBody.value = body;
        const saveBtn = form.querySelector('button');
        saveBtn.innerHTML = "<i class=\"fa fa-edit\" style='margin-right: 4px'></i>Save";
        // saveBtn.classList.toggle('add_task');
        saveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            objOfTasks[id]['title'] = inputTitle.value;
            objOfTasks[id]['body'] = inputBody.value;
            const updatedTask = listItemTemplate(objOfTasks[id]);
            listContainer.replaceChild(updatedTask, parent);
            form.reset();
            saveBtn.innerText = "Add Task"
        });
    }


    // Theme changing stuff
    function onThemeSelect() {
        const selectedTheme = themeSelect.value;
        const isConfirmed = confirm(`Are you sure you want to change theme to ${selectedTheme}`);
        if (!isConfirmed) {
            themeSelect.value = lastSelectedTheme;
            return;
        }
        setTheme(selectedTheme);
        lastSelectedTheme = selectedTheme;
        localStorage.setItem('app_theme', selectedTheme);
    }

    function setTheme(name) {
        const selectedThemeObj = themes[name];
        themeSelect.value = name;
        Object.entries(selectedThemeObj).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }

})(tasks);