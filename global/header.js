let header_type = false;
let logo_id = 0;
const logoNames = ["zap", "zapDim", "zapDisc", "zapPaint", "zapTask", "zapTwin", "zapSoyombo", "zapDarkhan", "zap2024", "zapSzak"];

function showSubMenu() {
    if (header_type == false) {
        headerherb.style["display"] = "none";
        headersoil.style["display"] = "inline";
        headersub.style["display"] = "block";
        header_type = true;
    }
    else {
        headerherb.style["display"] = "inline";
        headersoil.style["display"] = "none";
        headersub.style["display"] = "none";
        header_type = false;
    }
}
function switchLogo() {
    logo_id = logo_id + 1;
    if (logo_id > 9) logo_id = 0;
    document.getElementById("zapLogo").src = 'https://refreshinglemona.de/global/' + logoNames[logo_id] + '.png';
}

//    Home | Projects | Books | Extra | About
class newheader extends HTMLElement {
    //From user @absprog on youtube
    connectedCallback() {
        this.innerHTML = "<header>" +
            "<div style='display:flex; float:right;'>" +
            "<img id='zapLogo' onclick='switchLogo()' src='https://refreshinglemona.de/global/" + logoNames[0] + ".png' alt='Zap' style='height:90px;'>" +
            "<div id='headerbox'>" +
            "<a class='headerstyle' href='https://refreshinglemona.de'>Home</a> | " +
            "<a class='headerstyle' href='https://refreshinglemona.de/projects'>Projects</a> | " +
            "<a class='headerstyle' href='https://refreshinglemona.de/books'>Books</a> | " +
            "<a class='styleforbid' title='Coming Soon'>Extra</a> | " +
            "<a class='headerstyle' href='https://refreshinglemona.de/about'>About</a> " +
            "<img id='headerherb' src='https://refreshinglemona.de/global/menu_herb.svg' onclick='showSubMenu()'>" +
            "<img id='headersoil' src='https://refreshinglemona.de/global/menu_soil.svg' onclick='showSubMenu()'>" +
            "</div>" +
            "</div>" +
            "</header>" +
            "<div class='headersub-container'>" +
            "<div id='headersub'><table>" +
            "<tr>" +
            "<th><a href='https://refreshinglemona.de'>Home</a></th>" +
            "<th><a href='https://refreshinglemona.de/projects'>Projects</a></th>" +
            "<th><a href='https://refreshinglemona.de/books'>Books</a></th>" +
            "<th class='styleforbid'>Extra</th>" +
            "<th><a href='https://refreshinglemona.de/about'>About</a></th>" +
            "</tr><tr>" +
            "<td></td>" +
            "<td class='styleforbid'>Gallery</td>" +
            "<td><a href='https://refreshinglemona.de/books/poetry'>Poetry</a></td>" +
            "<td class='styleforbid'>Rankings</td>" +
            "<td></td>" +
            "</tr><tr>" +
            "<td></td>" +
            "<td><a href='https://refreshinglemona.de/projects/rut'>RUT</a></td>" +
            "<td class='styleforbid'>Dr. Sandwich</td>" +
            "<td class='styleforbid'>Tournaments</td>" +
            "<td></td>" +
            "</table></div>" +
            "</div>";
    }
}
customElements.define('new-header', newheader);
