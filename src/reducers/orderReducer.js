/*const initialState = {
    researchList: [
        {value: 1, label: "анализ на вич"},
        {value: 2, label: "анализ на сифилис"},
        {value: 3, label: "анализ на хламидию"},
        {value: 4, label: "анализ на уреаплазму"},
        {value: 5, label: "анализ на гепатит С"},],
    chosenResearch: []
};*/

const initialState = {
    researchList: [],
    chosenResearch: [],
    medicalCenters: [],
};


export function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RESEARCH':
            //console.log("reducer " + action.payload.id);
            return {
                ...state,
                chosenResearch: [...state.chosenResearch, action.payload]
            };
        case 'REMOVE_RESEARCH':
            return {
                ...state,
                chosenResearch: action.payload
            };
        case 'SET_RESEARCH':
            return {
                ...state,
                researchList: action.payload
            };
        case 'SET_CENTERS':
            return {
                ...state,
                medicalCenters: action.payload
            };
        default:
            return state;
    }
}

