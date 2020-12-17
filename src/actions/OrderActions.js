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

export function loadResearch(){
    return (dispatch) => {
        const url = "http://127.0.0.1:8080/test";
        //const url = "/getPoints";


        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        })
            .then(response => {
                console.log('Status: ' + response.status);
                if (!response.ok) {
                    console.log("Ты где-то продолбалась");
                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                dispatch({
                    type: 'SET_RESEARCH',
                    payload: answer,
                });
                console.log(answer);
            });
    }
}

export function loadMedicalCenters(){
    return (dispatch) => {
        const url = "http://127.0.0.1:8080/test1";
        //const url = "/getPoints";


        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        })
            .then(response => {
                console.log('Status: ' + response.status);
                if (!response.ok) {
                    console.log("Ты где-то продолбалась");
                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                dispatch({
                    type: 'SET_CENTERS',
                    payload: answer,
                });
                console.log(answer);
            });
    }
}
