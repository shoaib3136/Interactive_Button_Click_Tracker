function createCounter() {
    let count = 0; 
    
    return function() {
        count += 1;
        return count;
    }
}


const counter = createCounter();


const clickBtn = document.getElementById('clickBtn');
const display = document.getElementById('display');


clickBtn.addEventListener('click', () => {
    const currentCount = counter();
    display.textContent = currentCount;
    display.style.transform = 'scale(1.1)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
});