var header_type = false;

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

//    Home | Projects | Books | Extra | About
document.write("<header>");
    document.write("<div style='display:flex; float:right;'>");
        document.write("<img src='https://refreshinglemona.de/global/zap.png' alt='Zap' style='height:90px;'>");
        document.write("<div id='headerbox'>");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de'>Home</a> | ");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de/projects'>Projects</a> | ");
            document.write("<a class='styleforbid' title='Coming Soon'>Books</a> | ");
            document.write("<a class='styleforbid' title='Coming Soon'>Extra</a> | ");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de/about'>About</a> ");
            document.write("<img id='headerherb' src='https://refreshinglemona.de/global/menu_herb.svg' width='35' height='35' onclick='showSubMenu()'></img>");
            document.write("<img id='headersoil' src='https://refreshinglemona.de/global/menu_soil.svg' width='35' height='35' onclick='showSubMenu()'></img>");
        document.write("</div>");
    document.write("</div>");
document.write("</header>");
document.write("<div class='headersub-container'>");
    document.write("<div id='headersub'><table>");
        document.write("<tr>");
            document.write("<th><a href='https://refreshinglemona.de'>Home</a></th>");
            document.write("<th><a href='https://refreshinglemona.de/projects'>Projects</a></th>");
            document.write("<th class='styleforbid'>Books</th>");
            document.write("<th class='styleforbid'>Extra</th>");
            document.write("<th><a href='https://refreshinglemona.de/about'>About</a></th>");
        document.write("</tr><tr>");
            document.write("<td></td>");
            document.write("<td class='styleforbid'>Gallery</td>");
            document.write("<td class='styleforbid'>Oswald, Snow Journey</td>");
            document.write("<td class='styleforbid'>Videos</td>");
            document.write("<td></td>");
        document.write("</tr><tr>");
            document.write("<td></td>");
            document.write("<td><a href='https://refreshinglemona.de/projects/rut'>RUT</a></td>");
            document.write("<td class='styleforbid'>Dr. Sandwich</td>");
            document.write("<td class='styleforbid'>Music</td>");
            document.write("<td></td>");
        document.write("</tr><tr>");
            document.write("<td></td>");
            document.write("<td></td>");
            document.write("<td></td>");
            document.write("<td class='styleforbid'>Tournaments</td>");
            document.write("<td></td>");
        document.write("</tr>");
    document.write("</table></div>");
document.write("</div>");
