export const compact = (array: Array<any>) => {
    return array.filter((element) => Boolean(element));
}