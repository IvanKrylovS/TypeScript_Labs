function getCurrentDate() {
    console.log(Date.now());
}
window.addEventListener('load', function () {
    setTimeout(getCurrentDate, 10000);
});
function createLogger(message) {
    return function () {
        console.log(message);
    };
}
var logHello = createLogger("Hello, world!");
var logGoodbye = createLogger("Goodbye, world!");
logHello();
logGoodbye();
