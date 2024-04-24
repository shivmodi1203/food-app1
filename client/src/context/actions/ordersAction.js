export const setOrders = (data) =>{
    return {
        type: "SET_ORDERS",
        orders: data,
    };
};

export const getOrderfs = () =>{
    return {
        type: "GET_ORDERS",
    };
};