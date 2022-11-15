const initialState = {
    idVisible: false,
    balVisible: false,
    isRead: false,
    refreshing: false
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'TOGGLE_ID_VISIBLE':
            return{
                ...state,
                idVisible: !state.idVisible,
            };
        case 'TOGGLE_BAL_VISIBLE':
            return{
                ...state,
                balVisible: !state.balVisible,
            };
        case 'TOGGLE_NOTI_READ':
            return {
                ...state,
                isRead: !state.isRead,
            };
        default:
            return state;
    }
};