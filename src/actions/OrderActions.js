export function addResearch(data) {
    return{
        type: 'ADD_RESEARCH',
        payload: data
    }
};

export function removeResearch(data) {
    return{
        type: 'REMOVE_RESEARCH',
        payload: data
    }
};