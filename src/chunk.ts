export const chunk = (array: Array<any>, size: number = 1) => {
    let result = new Array<any>();
    const length = array != null ? array.length : 0;

    if (!length || size < 0) {
        return result;
    }
    
    let i = 0;
    for (i = 0; i + size <= length; i += size) {
        result.push(array.slice(i, i + size));
    }
    if (i < length) {
        result.push(array.slice(i, length));
    }
    return result;
}