let myClock = document.querySelector('.clock');
myClock.append(stripeArea());
myClock.append(numberArea());
myClock.append(timeHandler());

function stripeArea() {
    let stripeAreaDiv = document.createElement('div');
    stripeAreaDiv.classList.add('stripe-area');
    for( let i = 0; i < 60; i++ ) {
       let stripeSpan = document.createElement('span'); 
        stripeSpan.style.transform = `rotate(${i * 6}deg)`;
       if (i % 5 == 0) {
        stripeSpan.classList.add('stripe', 'circle');
       } else {
        stripeSpan.classList.add('stripe');
       }
        stripeAreaDiv.append(stripeSpan);
    }
    return stripeAreaDiv;
}
function numberArea() {
    let numberAreaDiv = document.createElement('div');
    numberAreaDiv.classList.add('number-area');  
    for( let i = 1; i <= 12; i++) {
        let numberDiv = document.createElement('div');
        numberDiv.classList.add('number')
        numberDiv.style.transform = `rotate(${i * 30}deg)`;
        let spanTag = document.createElement('span');
        spanTag.textContent = i;
        spanTag.style.transform = `rotate(-${i * 30}deg)`;
        numberDiv.append(spanTag);
        numberAreaDiv.append(numberDiv);
    } 
    return numberAreaDiv;
}
function timeHandler() {
    let timeHandlerDiv = document.createElement('div');
    timeHandlerDiv.classList.add('time-handler');
    let hrDiv = document.createElement('div');
    hrDiv.classList.add('hr');
    let minDiv = document.createElement('div');
    minDiv.classList.add('min');
    let secDiv = document.createElement('div');
    secDiv.classList.add('sec');

    timeHandlerDiv.append(hrDiv);
    timeHandlerDiv.append(minDiv);
    timeHandlerDiv.append(secDiv);

    return timeHandlerDiv ;
}
function startOurClocK() {
    let d = new Date();
    let sec = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr = (min + d.getHours()) / 12;
    
    let secElem = document.querySelector('.sec');
    let minElem = document.querySelector('.min');
    let hrElem = document.querySelector('.hr');

    secElem.style.transform = `rotate(${sec * 360}deg)`;
    minElem.style.transform = `rotate(${min * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;
}
startOurClocK()
setInterval ( startOurClocK, 1000 )