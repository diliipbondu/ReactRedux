const initialStore={
    counter:0
}

const Reducer=(state=initialStore,action)=>{
    switch(action.type){
        case 'ADD':
            return {...state,counter:state.counter+1};
        case 'REMOVE':
            return {...state,counter:state.counter-1}
        default:
            return state;
    }

}

export default Reducer;