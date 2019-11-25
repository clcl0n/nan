export const concat = (array: Array<any>, ...values: any) => {
    if (array === null) {
        return new Array<any>();
    }
    if (values === null) {
        return array;
    }
    
    return array.concat(values);
};