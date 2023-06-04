var btnAddSubtask = document.querySelectorAll('#btnAddSubtask');

btnAddSubtask.forEach(newTask => {
    
    newTask.addEventListener('click', () => {
        
        var subtaskLog = document.createElement('div');
        subtaskLog.innerHTML += `
        <div>
        
        <input type="text" id="subtask" placeholder="e.g designing">
                        <button id="btnEachTask">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 48L48 16M16 16L48 48" stroke="#999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </button>
        </div>`;
       
    document.querySelector('.subtask_raw').appendChild(subtaskLog);

    var subtaskAll = document.querySelectorAll('#subtask');
    subtaskAll.forEach((elData, itemDelete) => {


        var btnEachTask = document.querySelectorAll('#btnEachTask');
        for (let btndeleteIndex = 0; btndeleteIndex < btnEachTask.length; btndeleteIndex++) {
            btnEachTask[itemDelete].addEventListener('click', () => {
                document.querySelector('.subtask_raw').removeChild(subtaskLog);
            })
            
        }

        
        if (elData.value.trim() !== '') {
            var dataEl = {
                statusList: elData.value,
                isCompleted: false
            }
            boardsTaskStorage[currentIndex].task_log.forEach(items => {
                items.subtask.push(dataEl);
            localStorage.setItem(storage_key, JSON.stringify(boardsTaskStorage));
            })
        }
    })
    });
});
