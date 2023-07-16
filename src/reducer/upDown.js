

const intialState = 0;

const updateCount = (state=intialState,action)=>
{
    switch (action.type){
        case "INCREAMENT":
        return state+1;
        case "DECREAMENT":
        return state-1;
        default : return state;

    }
}
export default updateCount;