export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
}

export const getItem = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
}