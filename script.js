function clear(){
	document.querySelector('#b1').classList.remove('ok');
	document.querySelector('#b1').classList.remove('err');
	document.querySelector('#b2').classList.remove('ok');
	document.querySelector('#b2').classList.remove('err');
	document.querySelector('#b3').classList.remove('ok');
	document.querySelector('#b3').classList.remove('err');
	document.querySelector('#b4').classList.remove('ok');
	document.querySelector('#b4').classList.remove('err');
	document.querySelector('#b5').classList.remove('ok');
	document.querySelector('#b5').classList.remove('err');
}
document.querySelector('#b1').addEventListener('dblclick', () => {
    httpRequest1 = new XMLHttpRequest()
    httpRequest1.open('POST', ']]..adr..[[?openGate=property')
    httpRequest1.onreadystatechange = function(){
        if (httpRequest1.readyState === XMLHttpRequest.DONE) {
            if (httpRequest1.status === 200) {
                document.querySelector('#b1').classList.add('ok');
            } else {
                document.querySelector('#b1').classList.add('err');
            }
            setTimeout(clear, 3000)
        }
    }
    httpRequest1.send(document.getElementById('pin').value)
});
document.querySelector('#b2').addEventListener('dblclick', () => {
    httpRequest2 = new XMLHttpRequest()
    httpRequest2.open('POST', ']]..adr..[[?openGate=gateway')
    httpRequest2.onreadystatechange = function(){
        if (httpRequest2.readyState === XMLHttpRequest.DONE) {
            if (httpRequest2.status === 200) {
                document.querySelector('#b2').classList.add('ok');
            } else {
                document.querySelector('#b2').classList.add('err');
            }
            setTimeout(clear, 3000)
        }
    }
    httpRequest2.send(document.getElementById('pin').value)
});
document.querySelector('#b3').addEventListener('dblclick', () => {
    httpRequest3 = new XMLHttpRequest()
    httpRequest3.open('POST', ']]..adr..[[?openGate=door')
    httpRequest3.onreadystatechange = function(){
        if (httpRequest3.readyState === XMLHttpRequest.DONE) {
            if (httpRequest3.status === 200) {
                document.querySelector('#b3').classList.add('ok');
            } else {
                document.querySelector('#b3').classList.add('err');
            }
            setTimeout(clear, 3000)
        }
    }
    httpRequest3.send(document.getElementById('pin').value)
});
document.querySelector('#b4').addEventListener('dblclick', () => {
    httpRequest4 = new XMLHttpRequest()
    httpRequest4.open('POST', ']]..adr..[[?openGate=garage')
    httpRequest4.onreadystatechange = function(){
        if (httpRequest4.readyState === XMLHttpRequest.DONE) {
            if (httpRequest4.status === 200) {
                document.querySelector('#b4').classList.add('ok');
            } else {
                document.querySelector('#b4').classList.add('err');
            }
            setTimeout(clear, 3000)
        }
    }
    httpRequest4.send(document.getElementById('pin').value)
}); 
document.querySelector('#b5').addEventListener('dblclick', () => {
    httpRequest5 = new XMLHttpRequest()
    httpRequest5.open('POST', ']]..adr..[[?openGate=estate')
    httpRequest5.onreadystatechange = function(){
        if (httpRequest5.readyState === XMLHttpRequest.DONE) {
            if (httpRequest5.status === 200) {
                document.querySelector('#b5').classList.add('ok');
            } else {
                document.querySelector('#b5').classList.add('err');
            }
            setTimeout(clear, 3000)
        }
    }
    httpRequest5.send(document.getElementById('pin').value)
}); 