var btn_create_new_board = document.querySelector('.boards-button');
var boardsModal = document.querySelector('.board-modal');
var btnBoard = document.getElementById("btnBoard");
var boardName = document.getElementById('board_name');
var cancelModal = document.querySelector('.cancel-modal');

let isModalOpen = false;
let isCancelModalOpen = false;

let storage_key = 'boardTask';
let boardsTaskStorage = JSON.parse(localStorage.getItem(storage_key)) || [];
btn_create_new_board.addEventListener('click', () => {
    isModalOpen = true;

    if (isModalOpen) {
        boardsModal.style.display = "flex";

        btnBoard.addEventListener('click', () => {
            if (boardName.value === "") {
                isCancelModalOpen = true;
                if (isCancelModalOpen) {
                    cancelModal.style.display = "flex";

                    document.getElementById('btnNull').addEventListener('click', () => {
                        isCancelModalOpen = false;
                        cancelModal.style.display = "none";
                    });
                }

                return;
            }

            var createBoardTaskArr = {
                board_name: boardName.value,
                task_log: [],
            }

            boardsTaskStorage.push(createBoardTaskArr);
            localStorage.setItem(storage_key, JSON.stringify(boardsTaskStorage));
            boardName.value = "";
            window.location.reload();
            boardsModal.style.display = "none";
        })
        
    }
});

window.addEventListener('click', (e) => {
    if (e.target === boardsModal) {
        isModalOpen = false;
        boardsModal.style.display = "none";
        boardName.value = "";
    }
})

var boardsLog = document.querySelector('.container-boards');

for (let i = 0; i < boardsTaskStorage.length; i++) {
    boardsLog.innerHTML += `
        <div class="boards">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11_181)">
        <path d="M20.6965 0.705811H3.30358C1.86894 0.705811 0.705933 1.86882 0.705933 3.30346V20.6964C0.705933 22.131 1.86894 23.294 3.30358 23.294H20.6965C22.1312 23.294 23.2942 22.131 23.2942 20.6964V3.30346C23.2942 1.86882 22.1312 0.705811 20.6965 0.705811Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M12 0.705811V23.294" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M12 7.00952H23.2941" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M12 17.3506H23.2941" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_11_181">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        ${boardsTaskStorage[i].board_name}</div>
    `;


}

var boards = document.querySelectorAll('.boards');
let isCreateTaskModal = false;
var currentIndexgetStorage = localStorage.getItem('currentIndex');
var main_section = document.querySelector('.main_section');
boards.forEach((board, currentIndex) => {
    
    if (currentIndexgetStorage && currentIndexgetStorage === currentIndex.toString()) {
        board.classList.add('active-boards');
    }
    
    let getMainSection = false;

    board.addEventListener('click', () => {
        getMainSection = true;
        if (getMainSection) {
            main_section.innerHTML = `
                <!-- NAVBAR START -->
                <nav>
                    <div class="navbar_docs-titled">
                    <span class="title_docs">${boardsTaskStorage[currentIndex].board_name}</span>
                    </div>
                    <div class="navbar_navbar-elements">
                        <div class="button-element">
                            <button id="btnTask" class="desktop">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4.5V19.5M19.5 12H4.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Create New Task                            
                            </button>
                            <button id="btnTask"  class="mobile">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4.5V19.5M19.5 12H4.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </button>
                        </div>
                        <div class="ellipses-dropdown-menu">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8ZM14 16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14C16.5304 14 17.0391 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16ZM14 24C14 23.4696 14.2107 22.9609 14.5858 22.5858C14.9609 22.2107 15.4696 22 16 22C16.5304 22 17.0391 22.2107 17.4142 22.5858C17.7893 22.9609 18 23.4696 18 24C18 24.5304 17.7893 25.0391 17.4142 25.4142C17.0391 25.7893 16.5304 26 16 26C15.4696 26 14.9609 25.7893 14.5858 25.4142C14.2107 25.0391 14 24.5304 14 24Z" fill="#999999"/>
                                </svg>                        
                        </div>
                        <div class="notification">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.85001 3.49995C5.9752 3.35077 6.03744 3.15873 6.02358 2.96448C6.00972 2.77022 5.92084 2.58897 5.77574 2.45907C5.63064 2.32917 5.4407 2.26081 5.2461 2.26844C5.0515 2.27607 4.8675 2.35909 4.73301 2.49995C3.50448 3.8702 2.69025 5.5611 2.38501 7.37595C2.35678 7.57001 2.40567 7.76741 2.52122 7.92585C2.63677 8.08429 2.80977 8.19118 3.00317 8.22361C3.19657 8.25604 3.39498 8.21143 3.55589 8.09934C3.7168 7.98726 3.8274 7.81661 3.86401 7.62395C4.12215 6.08896 4.81086 4.65883 5.85001 3.49995ZM19.267 2.49995C19.2015 2.42589 19.1221 2.3655 19.0332 2.32226C18.9443 2.27902 18.8477 2.25378 18.749 2.24799C18.6503 2.2422 18.5515 2.25599 18.4581 2.28854C18.3648 2.3211 18.2788 2.37179 18.2051 2.43769C18.1314 2.5036 18.0715 2.58342 18.0288 2.67257C17.986 2.76172 17.9614 2.85844 17.9562 2.95716C17.9509 3.05588 17.9653 3.15466 17.9984 3.24781C18.0315 3.34096 18.0827 3.42665 18.149 3.49995C19.1885 4.65874 19.8775 6.08887 20.136 7.62395C20.1689 7.82021 20.2784 7.99537 20.4404 8.11089C20.5207 8.16809 20.6114 8.20893 20.7074 8.23108C20.8034 8.25322 20.9028 8.25624 21 8.23995C21.0972 8.22367 21.1902 8.1884 21.2738 8.13617C21.3573 8.08394 21.4298 8.01576 21.487 7.93553C21.5442 7.8553 21.585 7.76459 21.6071 7.66858C21.6293 7.57257 21.6323 7.47313 21.616 7.37595C21.3102 5.5609 20.4962 3.87 19.267 2.49995Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C10.2098 2.25 8.49291 2.96116 7.22704 4.22703C5.96117 5.4929 5.25001 7.20979 5.25001 9V9.75C5.25309 11.7892 4.49781 13.7567 3.13101 15.27C3.04893 15.3611 2.99042 15.4708 2.9606 15.5898C2.93078 15.7087 2.93057 15.8331 2.95998 15.9521C2.98939 16.0711 3.04752 16.1811 3.12929 16.2724C3.21105 16.3638 3.31396 16.4337 3.42901 16.476C4.97301 17.046 6.58901 17.466 8.26001 17.719C8.22239 18.2331 8.29117 18.7495 8.46208 19.2359C8.63298 19.7222 8.90233 20.1681 9.2533 20.5457C9.60427 20.9233 10.0293 21.2245 10.5019 21.4304C10.9745 21.6364 11.4845 21.7427 12 21.7427C12.5155 21.7427 13.0255 21.6364 13.4981 21.4304C13.9707 21.2245 14.3957 20.9233 14.7467 20.5457C15.0977 20.1681 15.367 19.7222 15.5379 19.2359C15.7088 18.7495 15.7776 18.2331 15.74 17.719C17.388 17.4692 19.0063 17.0523 20.57 16.475C20.6849 16.4326 20.7876 16.3627 20.8692 16.2715C20.9509 16.1802 21.0089 16.0703 21.0383 15.9515C21.0677 15.8326 21.0676 15.7084 21.0379 15.5896C21.0082 15.4708 20.9499 15.3611 20.868 15.27C19.5016 13.7565 18.7467 11.7891 18.75 9.75V9C18.75 7.20979 18.0388 5.4929 16.773 4.22703C15.5071 2.96116 13.7902 2.25 12 2.25ZM9.75001 18C9.75001 17.966 9.75001 17.933 9.75201 17.9C11.2476 18.0348 12.7524 18.0348 14.248 17.9L14.25 18C14.25 18.5967 14.013 19.169 13.591 19.591C13.169 20.0129 12.5967 20.25 12 20.25C11.4033 20.25 10.831 20.0129 10.409 19.591C9.98706 19.169 9.75001 18.5967 9.75001 18Z" fill="#999999"/>
                                </svg>                        
                        </div>
                        <div class="avatar">
                            <img src="./assets/avatar_pixelated.png" alt="avatar">
                        </div>
                    </div>
                </nav>
                <!-- NAVBAR ENDS -->
                <div class="sidebar-show">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.764 15.2627C3.748 9.30133 9.37067 5 16.0013 5C22.628 5 28.248 9.29733 30.2347 15.2533C30.3947 15.736 30.3947 16.256 30.2347 16.7373C28.252 22.6987 22.628 27 15.9987 27C9.372 27 3.75067 22.7027 1.76533 16.7467C1.605 16.265 1.605 15.7443 1.76533 15.2627H1.764ZM23 16C23 17.8565 22.2625 19.637 20.9497 20.9497C19.637 22.2625 17.8565 23 16 23C14.1435 23 12.363 22.2625 11.0503 20.9497C9.7375 19.637 9 17.8565 9 16C9 14.1435 9.7375 12.363 11.0503 11.0503C12.363 9.7375 14.1435 9 16 9C17.8565 9 19.637 9.7375 20.9497 11.0503C22.2625 12.363 23 14.1435 23 16Z" fill="black"/>
                        </svg>                
                </div>
                <div class="main_section-status">
                    <section class="todo">
                        <div class="title">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#EE2848"/>
                                </svg>
                                Pending                        
                        </div>
                        <div class="todo_section">
                        </div>
                    </section>
                    <section class="doing">
                        <div class="title">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#F7B928"/>
                                </svg>                        
                                In Progress                        
                        </div>
                        <div class="doing_section">
                        </div>
                    </section>
                    <section class="done">
                        <div class="title">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#45BD62"/>
                                </svg>                        
                                Completed                        
                        </div>
                        <div class="done_section">
                        </div>
                    </section>
                </div>



                <!-- CREATE TASK MODAL -->
            <div class="create-task-modal">
                <div class="create-task-modal-content">
                    <h1>Add New Task ( <span class="nameBords">${boardsTaskStorage[currentIndex].board_name}</span> )</h1>
                    <label for="task_name">
                        Task Name
                        <input type="text" id="task_name" placeholder="task name">
                    </label>
                    <label for="description">
                        Description
                        <textarea name="description" id="description" placeholder="e.g It’s always good to take a break, This 15 minutes
        break will recharge the batteries a little.
        "></textarea>
                    </label>
                    <label for="subtask">
                        Subtask
                        <span class="subtask-log">
                            <div class="subtask_raw">
                                <input type="text" id="subtask" placeholder="e.g designing">
                                <button id="btnEachTask">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 48L48 16M16 16L48 48" stroke="#999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </button>
                            </div>
                        </span>                    
                    </label>
                    <button id="btnAddSubtask">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.5V19.5M19.5 12H4.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Add New Subtask                    
                    </button>
                    <label for="duedate">
                        Due Date
                        <input type="date" name="duedate" id="duedate">
                    </label>
                    <label for="keywords">
                        Keyword
                        <select name="keywords" id="keywords">
                            <option value="layout">Layout</option>
                            <option value="signages acrylic">Signages Acrylic</option>
                            <option value="signages panaflex">Signages Panaflex</option>
                            <option value="signages stainless">Signages Stainless</option>
                            <option value="sticker">Sticker</option>
                            <option value="sticker on sintra">Sticker on Sintra</option>
                            <option value="frosted sticker">Frosted Sticker</option>
                        </select>
                    </label>
                    <label for="priority">
                        Priority
                        <select name="priority" id="priority">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label>
                    <label for="status">
                        Status
                        <select name="status" id="status">
                            <option value="pending">Pending</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>
                    <button id="btnCreateNewTask">
                        Create New Task
                    </button>
                </div>
            </div>
                `;
        }

        var btnAddSubtask = document.querySelectorAll('#btnAddSubtask');

        btnAddSubtask.forEach(newTask => {
            newTask.addEventListener('click', () => {
                document.querySelector('.subtask-log').innerHTML += `
                <div class="subtask_raw">
                <input type="text" id="subtask" placeholder="e.g designing">
                                <button id="btnEachTask">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 48L48 16M16 16L48 48" stroke="#999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                </button>
                </div>`;

                document.querySelectorAll('.subtask_raw').forEach(substask => {
                    
                })
            });
        });

        

        boardsTaskStorage[currentIndex].task_log.forEach(item => {
            var todos = document.querySelectorAll('.todo_section');
            var doings = document.querySelectorAll('.doing_section');
            var dones = document.querySelectorAll('.done_section');

            let createdAts = item.created_at;
            let createdDates = new Date(createdAts);
            const options = {
                weekday: 'short', // Short weekday name (e.g., Tue)
                month: 'short', // Short month name (e.g., May)
                day: 'numeric', // Numeric day (e.g., 24)
                year: 'numeric' // Full year (e.g., 2023)
              };
            let upperCaseStringPrioritys = item.priority;
            let upperCaseStringKeywordss = item.keywords;

            let statusTaskLogHTML = `<div class="task-content">
            <div class="priority_and_ellipses">
                <div class="tag-priority">${upperCaseStringPrioritys.toUpperCase()}</div>
                <div id="btn-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6ZM10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12ZM10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18Z" fill="#555659"/>
                        </svg>
                </div>                            
            </div>
            <div class="task-title">${item.task_name}</div>
            <div class="tag_keyword">${upperCaseStringKeywordss.toUpperCase()}</div>
            <div class="date_and_task-progress">
                <span>
                    ${createdDates.toLocaleDateString('en-US', options)}
                </span>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7012 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27225 12.5612 8.26882 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z" fill="#555659"/>
                        </svg>
                        0 / ${item.subtask.length}                           
                </span>
            </div>
        </div>`;

        let container;
        if (boardsTaskStorage && boardsTaskStorage[currentIndex].task_log.length > 0) {
            if (item.status === "pending") {
                todos.forEach(todo => {
                    todo.innerHTML += statusTaskLogHTML;
                });
            } else if (item.status === "inprogress") {
                doings.forEach(doing => {
                    doing.innerHTML += statusTaskLogHTML;
                });
            } else if (item.status === "completed") {
                dones.forEach(done => {
                    done.innerHTML += statusTaskLogHTML;
                });
            }
        } 
        });
        
        
        var btnTask = document.querySelectorAll('#btnTask');

        localStorage.setItem('currentIndex', currentIndex);
        boards.forEach(btn => {
            btn.classList.remove('active-boards');
        })
        board.classList.add('active-boards');
        var createTaskModals = document.querySelectorAll('.create-task-modal');
        var btnCreateNewTask = document.querySelectorAll('#btnCreateNewTask');
        Array.from(btnTask).forEach(item => {
            item.addEventListener('click', () => {
                
                    isCreateTaskModal = true;
                    if (isCreateTaskModal) {
                        createTaskModals.forEach(itemTask => {
                            itemTask.style.display = "flex";
                        })
                    
                        
    
                        btnCreateNewTask.forEach(item => {
                            item.addEventListener('click', () => {
                                var task_name = document.getElementById('task_name');
                                var description = document.getElementById('description');
                                var subtask = document.getElementById('subtask');
                                var duedate = document.getElementById('duedate');
                                var keywords = document.getElementById('keywords');
                                var priority= document.getElementById('priority');
                                var currentStatus = document.getElementById("status");
                            
                                if (task_name.value === "" 
                                || description.value === ""
                                || subtask.value === ""
                                || duedate.value === ""
                                || keywords.value === ""
                                || priority.value === "") {
                                    isCancelModalOpen = true;
                                    cancelModal.style.display = "flex";
                                } else {
                                    document.getElementById('btnNull').addEventListener('click', () => {
                                        isCancelModalOpen = false;
                                        cancelModal.style.display = "none";
                                        
                                    });                                
    
                                    var updateTaskLog = {
                                        task_name: task_name.value,
                                        description: description.value,
                                        subtask: [{statusList:subtask.value, isCompleted: false}],
                                        duedate: duedate.value,
                                        created_at: Date.now(),
                                        keywords: keywords.value,
                                        priority: priority.value,
                                        status: currentStatus.value,
                                    }
                                
                                    boardsTaskStorage[currentIndex].task_log.push(updateTaskLog);
                                    localStorage.setItem(storage_key, JSON.stringify(boardsTaskStorage)); 
                                
                                    task_name.value = "";
                                        description.value = "";
                                        subtask.value = "";
                                        duedate.value = "";
                                        keywords.value = "";
                                        priority.value = "";
                                
                                        createTaskModals.forEach(itemTask => {
                                            itemTask.style.display = "none";
                                        })
                                        isCreateTaskModal = false;    
                                }

                                
                            });
                            
                            
                            
                            //ADD NEW TASK WINDOW CLICK CLOSED;
                            
                            window.addEventListener('click', (e) => {
                                createTaskModals.forEach(itemTask => {
                                    if (e.target === itemTask) {
                                        isCreateTaskModal = false;
                                        itemTask.style.display = "none";
                                    }
                                });
                                
                            });
                        });
                    }
            }); 
        })
    });
});
