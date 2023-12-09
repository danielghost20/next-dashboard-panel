export default function validateWithRegex ({regex, value} : {regex: RegExp, value: number | string}): string | number  {
    if (regex.test(value.toString()) || value == "") {
        return value
    }
    return ''
}