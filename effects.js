counter = 0;
function change_theme_to_light(){
    document.querySelector(':root').style.setProperty('--bgcolor', 'rgb(239, 238, 246)');
    document.querySelector(':root').style.setProperty('--boxcolor', 'rgb(255, 255, 255)');
    document.querySelector(':root').style.setProperty('--headingcolor', 'rgb(42, 45, 86)');
    document.querySelector(':root').style.setProperty('--textcolor', 'rgb(136, 136, 159)');
    document.querySelector(':root').style.setProperty('--shadow', '0px 2px 20px rgba(173, 173, 173, 0.705)');
    document.querySelector(':root').style.setProperty('--shadowmain:', 'rgba(184, 184, 184, 0.2) 0px 3px 29px 0px');
    document.querySelector(':root').style.setProperty('--shadowpricinghover:', '0px 0 30px rgba(202, 202, 202, 0.255)');
    document.querySelector(':root').style.setProperty('--scrollbar', 'rgb(255,255,255)');
    document.querySelector(':root').style.setProperty('--scrollbarnormal', 'rgb(190,190,190)');
    document.querySelector(':root').style.setProperty('--scrollbarhover', 'rgb(160,160,160)');
    document.querySelector(':root').style.setProperty('--sidenav', 'rgba(235, 230, 235, 0.555)');
    document.querySelector(':root').style.setProperty('--navtexthover', '#3f3f3f');

    document.getElementById('sun').className = 'colored';
    document.getElementById('moon').className = 'lol';
}

function change_theme_to_dark(){
    document.querySelector(':root').style.setProperty('--bgcolor', 'rgb(2, 0, 19)');
    document.querySelector(':root').style.setProperty('--boxcolor', 'rgb(20, 19, 33)');
    document.querySelector(':root').style.setProperty('--headingcolor', 'rgb(224, 225, 252)');
    document.querySelector(':root').style.setProperty('--textcolor', 'rgb(104, 105, 126)');
    document.querySelector(':root').style.setProperty('--shadow', '0px 2px 20px rgba(0, 0, 0, 0.705)');
    document.querySelector(':root').style.setProperty('--shadowmain:', 'rgba(0, 0, 0, 0.2) 0px 3px 29px 0px');
    document.querySelector(':root').style.setProperty('--shadowpricinghover:', '0px 0 30px rgba(0, 0, 0, 0.486)');
    document.querySelector(':root').style.setProperty('--scrollbar', 'rgb(0, 0, 0)');
    document.querySelector(':root').style.setProperty('--scrollbarnormal', 'rgb(58, 58, 58)');
    document.querySelector(':root').style.setProperty('--scrollbarhover', 'rgb(92, 92, 92)');
    document.querySelector(':root').style.setProperty('--sidenav', 'rgba(24, 24, 24, 0.555)');
    document.querySelector(':root').style.setProperty('--navtexthover', '#e0e0e0');

    document.getElementById('sun').className = 'lol';
    document.getElementById('moon').className = 'colored';
}