export const requiredField = value => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `Maximal field length is ${maxLength} symbols`;
    return undefined;
};
