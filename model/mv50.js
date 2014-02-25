(function(){
    function swingSword(swordType, powerOfStrike){
    console.log(swordType + ' '+ powerOfStrike);
    return "strike performed " + swordType;
}

var strikeChain=[
    x=swingSword('blade', 100),
    y=swingSword('axe', 200),
    z=swingSword('chainsaw', 100)
];
console.log("fakir #{strikeChain}");
console.log(strikeChain);

})();
