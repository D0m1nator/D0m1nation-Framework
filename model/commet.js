//git remote add origin https://github.com/D0m1nator/D0m1nation-Framework.git
//git push -u origin master
function doubleBarreled(gun1, gun2){
    return gun1+gun2+'POWAAAA!!!';
}

function defAction(arrPerformActions){
    if (typeof arrPerformActions !== 'object') {
        return 'return null';
    } else return defAction('recursive');
}