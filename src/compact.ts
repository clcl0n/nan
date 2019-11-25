export const compact = (array: Array<any>) => {
    if (array == null) {
        return new Array<any>();
    }

    return array.filter((element) => Boolean(element));
}