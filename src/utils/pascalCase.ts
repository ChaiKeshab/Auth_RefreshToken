export const pascalCase = (str: string) => {
    return str
        .split(" ")
        .map((part) => part.charAt(0).toUpperCase().concat(part.slice(1)))
        .join(" ")
}