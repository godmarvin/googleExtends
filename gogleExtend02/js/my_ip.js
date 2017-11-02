function httpRequest(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {

            callback(xhr.responseText);

        }

    }

    xhr.send();

}


httpRequest('http://pv.sohu.com/cityjson', function (ip) {

    var values = ip.split('=');

   // alert(ip);

    console.log('values'+values);


    if(values.length==2){
        document.getElementById('ip_div').innerText =JSON.parse(values[1].replace(';','')).cip;

    }else{
        document.getElementById('ip_div').innerText = 'not found';
    }


});