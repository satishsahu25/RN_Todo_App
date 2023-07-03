
export const ADD_TASK='ADD_TASK';
export const ADD_TASK_ID='ADD_TASK_ID';

export const addtask=(task)=>{
       return {
            type: ADD_TASK,
            payload:task
        }
}
export const addtaskid=(taskid)=>{
      return {
        type: ADD_TASK_ID,
        payload:taskid
        }
}
