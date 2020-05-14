
function myButton(){
    document.getElementById('menu').classList.toggle("show");
}

function date_hour(id)
{
        date = new Date;
        year = date.getFullYear();
        mois1 = date.getMonth();
        mois2 = new Array('danvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'duin', 'duillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        d = date.getDate();
        day = date.getDay();
        days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'deudi', 'Vendredi', 'Samedi'];
        h = date.getHours();

        if (h < 10)

        {
                h = "0"+h;
        }

        m = date.getMinutes();

        if (m < 10)

        {
                m = "0"+m;
        }

        s = date.getSeconds();

        if (s < 10)

        {
                s = "0"+s;
        }

        result = `${days[day]} ${d} ${mois2[mois1]} ${year} | ${h}: ${m}: ${s}`
        // result = 'Nous sommes le '+days[day]+' '+d+' '+mois2[mois1]+' '+year+' il est '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        // setTimeout('date_hour("'+id+'")','1000');
        setTimeout(`date_hour("${id}")`, '1000')
        return true;
}