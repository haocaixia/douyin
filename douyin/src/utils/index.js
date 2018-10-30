/**
 * 函数去抖动
 * 直到事件触发不抖才执行，函数可能只会执行一次
 * @param {*} func 要执行的函数
 * @param {number} [delay=150]
 * @returns 去抖动之后的函数
 */
export function debounce(func, delay=150){
    let timer = 0;

    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func();
        }, delay);
    }
}