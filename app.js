//Tekee uuden pyynnön
document.getElementById('1').onclick = function LataaOmena() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    //Avaa sivun
    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1039',
        true
    );
    //Lähettää tiedot
    xmlhttp.send();
}

document.getElementById('2').onclick= function LataaSello() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET'
        'https://www.finnkino.fi/xml/Schedule/?area=1038',
        true
    );
    xmlhttp.send();
}

document.getElementById('3').onclick = function LataaItis() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1045',
        true
    );
    xmlhttp.send();
}

document.getElementById('4').onclick =function LataaKinopalatsi() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1031',
        true
    );
    xmlhttp.send();
}

document.getElementById('5').onclick = function loadXMLMaxim() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1032',
        true
    );
    xmlhttp.send();
}

document.getElementById('6').onclick = function loadXMLTennispalatsi() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1033',
        true
    );
    xmlhttp.send();
}


document.getElementById('7').onclick = function Flamingo() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1013',
        true
    );
    xmlhttp.send();
}

document.getElementById('8').onclick = function Fantasia() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1015',
        true
    );
    xmlhttp.send();
}
document.getElementById('9').onclick = function Scala() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1016',
        true
    );
    xmlhttp.send();
}

document.getElementById('10').onclick = function Kuvapalatsi() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1017',
        true
    );
    xmlhttp.send();
}

document.getElementById('11').onclick = function Strand() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1041',
        true
    );
    xmlhttp.send();
}

document.getElementById('12').onclick = function Plaza() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1018',
        true
    );
    xmlhttp.send();
}


document.getElementById('13').onclick = function Promenadi() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1019',
        true
    );
    xmlhttp.send();
}


document.getElementById('14').onclick = function Atlas() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1034',
        true
    );
    xmlhttp.send();
}



document.getElementById('15').onclick = function Plevna() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1035',
        true
    );
    xmlhttp.send();
}

document.getElementById('16').onclick = function TurkuKino() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1022',
        true
    );
    xmlhttp.send();
}

document.getElementById('17').onclick = function LuxeMylly() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xmlhttp.open(
        'GET',
        'https://www.finnkino.fi/xml/Schedule/?area=1046',
        true
    );
    xmlhttp.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =
        '<tr><th><h3>Lajityyppi</h3></th><th><h3>Nimi</h3></th><th><h4>Ikäraja</h4></th><th><h4>Tyyppi</h4><th><h4>Päivä ja aika</h4><th><h4>Paikka</h4><th><h4>Vuosi</h4></th></th></th></tr>';
    var x = xmlDoc.getElementsByTagName('Show');
    for (i = 0; i < x.length; i++) {
        const imageUrl = x[i].getElementsByTagName('Images')[0]
            .firstElementChild.textContent;
        table +=
            '<tr><td>' +
            x[i].getElementsByTagName('Genres')[0].childNodes[0]
                .nodeValue +
            '</td><td>' +
            x[i].getElementsByTagName('Title')[0].childNodes[0]
                .nodeValue +
                '</td><td>' +
             x[i].getElementsByTagName('Rating')[0].childNodes[0]
                .nodeValue +
                '</td><td>' +
            x[i].getElementsByTagName('PresentationMethod')[0].childNodes[0]
            .nodeValue + 
            '</td><td>' +
            x[i].getElementsByTagName('dttmShowStart')[0].childNodes[0]
            .nodeValue + 
            '</td><td>' +
            x[i].getElementsByTagName('TheatreAuditorium')[0].childNodes[0]
                .nodeValue + 
            '</td><td>' +
            x[i].getElementsByTagName('ProductionYear')[0].childNodes[0]
                .nodeValue + 
                '</td><td>' +
            '</td><td><img src=' +
            imageUrl +
            '></td></tr>';
    }
    document.getElementById('Taulukko').innerHTML = table;
}