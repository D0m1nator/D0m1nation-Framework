//NAMESPACE
nitrogen();
function nitrogen() {
    //Assert testing function
    function assertContract(value, desc) {
        //
        var liToWrite = document.createElement("li");
        liToWrite.className = value ? "pass" : "fail";
        liToWrite.appendChild(document.createTextNode(desc));
        document.getElementById("console-output").appendChild(liToWrite);
    }


    //Prototypes Code
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
    /**
     * Dumping object keys
     * @param recivedObject
     */
    function dumpObject(recivedObject) {
        for (var objKey in recivedObject) {
            console.log(objKey);// itertate over prototype
        }
    }

    dumpObject(weaponGaussCannon);
    //NAMESPACE END
}