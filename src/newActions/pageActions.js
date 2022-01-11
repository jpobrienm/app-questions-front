
export const pageActionTypes = {
    LOADING_PAGE:"LOADING_PAGE",
    LOAD_SUCCESS:"LOAD_SUCCESS",
    LOAD_ERROR:"LOAD_ERROR"
}

export const pageLoadingAction = () =>{
    return({
        type: pageActionTypes.LOADING_PAGE,
        payload: true,
    })
}

export const pageLoadedAction = () => {
    return({
        type: pageActionTypes.LOADING_PAGE,
        payload: false,
    })
}

export const pageLoadError = (error) => {
    return({
        type: pageActionTypes.LOADING_PAGE,
        payload: error,
    })
}