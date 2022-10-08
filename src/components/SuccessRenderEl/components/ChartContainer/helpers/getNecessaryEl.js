export default function getNecessaryEl(arr, nth) {
    const result = [];

    switch (nth) {
        case 1:
            const count = Math.round((24 - new Date().getHours()) / 3);
            for (let i = (nth - 1) * 8; i < count; i += 1) {
                result.push(arr[i]);
            }
            break;
        case 5:
            const count1 = Math.round(((new Date().getHours() - 24) * -1) / 3);
            for (let i = arr.length - count1; i < arr.length; i += 1) {
                result.push(arr[i]);
            }
            break;

        case 'daily':
            for (let i = 1; i < arr.length; i += 8) {
                result.push(arr[i]);
            }
            break;

        default:
            for (let i = (nth - 1) * 8; i < nth * 8; i += 1) {
                result.push(arr[i]);
            }
    }

    return result;
}