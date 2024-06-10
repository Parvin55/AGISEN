async function Aname(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V9').then(
        res => { return res.text() }
    ).then(
        data => document.getElementById('Aname').innerText = data
    )
}

async function Bname(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V10').then(
        res => { return res.text() }
    ).then(
        data => document.getElementById('Bname').innerText = data
    )
}

async function Cname(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V11').then(
        res => { return res.text() }
    ).then(
        data => document.getElementById('Cname').innerText = data
    )
}

async function Dname(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V12').then(
        res => { return res.text() }
    ).then(
        data => document.getElementById('Dname').innerText = data
    )
}

async function buttonA(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V2').then(
        res => { return res.json() }
    ).then(
        data => {
            if (data == 0) {
                document.getElementById('motorA').innerText = "OFF"
            }
            else {
                document.getElementById('motorA').innerText = "ON"
            }
        }
    )
}

async function buttonB(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V3').then(
        res => { return res.json() }
    ).then(
        data => {
            if (data == 0) {
                document.getElementById('motorB').innerText = "OFF"
            }
            else {
                document.getElementById('motorB').innerText = "ON"
            }
        }
    )
}

async function buttonC(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V4').then(
        res => { return res.json() }
    ).then(
        data => {
            if (data == 0) {
                document.getElementById('motorC').innerText = "OFF"
            }
            else {
                document.getElementById('motorC').innerText = "ON"
            }
        }
    )
}

async function buttonD(){
    fetch('https://blr1.blynk.cloud/external/api/get?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V5').then(
        res => { return res.json() }
    ).then(
        data => {
            if (data == 0) {
                document.getElementById('motorD').innerText = "OFF"
            }
            else {
                document.getElementById('motorD').innerText = "ON"
            }
        }
    )
}

document.getElementById('motorA').addEventListener('click', (event) => {
    event.preventDefault();
    text = document.getElementById('motorA').innerText
    if (text == 'OFF') {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V2=1')
    }
    else {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V2=0')
    }
})

document.getElementById('motorB').addEventListener('click', (event) => {
    event.preventDefault();
    text = document.getElementById('motorB').innerText
    if (text == 'OFF') {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V3=1')
    }
    else {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V3=0')
    }
})

document.getElementById('motorC').addEventListener('click', (event) => {
    event.preventDefault();
    text = document.getElementById('motorC').innerText
    if (text == 'OFF') {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V4=1')
    }
    else {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V4=0')
    }
})

document.getElementById('motorD').addEventListener('click', (event) => {
    event.preventDefault();
    text = document.getElementById('motorD').innerText
    if (text == 'OFF') {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V5=1')
    }
    else {
        fetch('https://blynk.cloud/external/api/update?token=UFRex5GD3NHbI6-vSDuJmvdFneFgZEai&V5=0')
    }
})

setInterval(async function() {
    await Promise.all([Aname(),Bname(),Cname(),Dname(),buttonA(),buttonB(),buttonC(),buttonD()]);
}, 1000);

