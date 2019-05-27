export const DateToStringYYYYMMDD = (date: Date, separator: string = '/'): string => {
    return [date.getFullYear(), date.getMonth(), date.getDay()].join(separator);
}

export const DateToStringDDMMYYYY = (date: Date, separator: string = '/'): string => {
    return [date.getDay(), date.getMonth(), date.getFullYear()].join(separator);
}

export const DateToStringMMDDYYYY = (date: Date, separator: string = '/'): string => {
    return [date.getMonth(), date.getDay(), date.getFullYear()].join(separator);
}