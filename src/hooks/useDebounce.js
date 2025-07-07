function useDebounce (cb, delay) {

    let timerId = null;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

export default useDebounce;