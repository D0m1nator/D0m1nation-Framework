(function () {
    var weaponGaussCannon = {
        cooldown: '9 seconds'
    };

    weaponGaussCannon.prototype = {
        damage: 100,
        weight: '300kg',
        stats: function () {
            console.log(damage + weight);
        }
    };
    console.log(weaponGaussCannon);

    function dumpObject(recivedObject){
        /**
         * Dumping object data
         */
        for(var objKey in recivedObject ){
            var objectKeyData;
            console.log(objKey);// itertate over prototype
            objectKeyData=objKey;
            console.log(objectKeyData);
        }
    }

}());