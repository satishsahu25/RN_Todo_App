import { ADD_TASK,ADD_TASK_ID } from "./actions";


const initialState={
    tasks:[],
    taskID:1
}

function taskreducer(state=initialState,action){
    switch(action.type){

        case ADD_TASK:
            return {
                ...state, tasks:action.payload
            };
       case ADD_TASK_ID:
            return {
                ...state, taskID:action.payload
            };
        default:
            return state;

    }
}

export default taskreducer