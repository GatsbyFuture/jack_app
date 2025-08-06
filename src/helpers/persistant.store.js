export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
}