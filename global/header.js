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

//    Home | Projects | RUT | Extra | About
document.write("<header>");
    document.write("<div style='display:flex; float:right;'>");
        document.write("<img src='https://refreshinglemona.de/global/zap.png' alt='Zap' style='height:90px;'>");
        document.write("<div id='headerbox'>");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de'>Home</a> | ");
            document.write("<a class='styleforbid' title='Coming Soon'>Projects</a> | ");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de/rut'>RUT</a> | ");
            document.write("<a class='styleforbid' title='Coming Soon'>Extra</a> | ");
            document.write("<a class='headerstyle' href='https://refreshinglemona.de/about'>About</a> ");
            document.write("<img id='headerherb' src='https://refreshinglemona.de/global/menu_herb.svg' width='35' height='35' onclick='showSubMenu()'></img>");
            document.write("<img id='headersoil' src='https://refreshinglemona.de/global/menu_soil.svg' width='35' height='35' onclick='showSubMenu()'></img>");
        document.write("</div>");
    document.write("</div>");
document.write("</header>");
document.write("<div id='headersub'><table>");
    document.write("<tr>");
        document.write("<th><a href='https://refreshinglemona.de'>Home</a></th>");
        document.write("<th class='styleforbid'>Projects</th>");
        document.write("<th><a href='https://refreshinglemona.de/rut'>RUT</a></th>");
        document.write("<th class='styleforbid'>Extra</th>");
        document.write("<th><a href='https://refreshinglemona.de/about'>About</a></th>");
    document.write("</tr><tr>");
        document.write("<td class='styleforbid'>Tree</td>");
        document.write("<td class='styleforbid'>Rom Hacks</td>");
        document.write("<td class='styleforbid'>Mechanics</td>");
        document.write("<td class='styleforbid'>Videos</td>");
        document.write("<td></td>");
    document.write("</tr><tr>");
        document.write("<td></td>");
        document.write("<td class='styleforbid'>Books</td>");
        document.write("<td class='styleforbid'>Patch Notes</td>");
        document.write("<td class='styleforbid'>Music</td>");
        document.write("<td></td>");
    document.write("</tr><tr>");
        document.write("<td></td>");
        document.write("<td class='styleforbid'>Other</td>");
        document.write("<td></td>");
        document.write("<td class='styleforbid'>Tournaments</td>");
        document.write("<td></td>");
    document.write("</tr>");
document.write("</table></div>");
