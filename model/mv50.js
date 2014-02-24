//function assert(callBackParam, stringParam){
//
//}
//
////String definition
//var textCall='Domo Dominatus';
///**
// * Asert functions retrive function as parametr and text string with paramer
// */
//assert(
//    //Useless function as argument
//    useless(
//        //Callback function as argument
//        function(){
//            return text;
//        }
//    )===text, 'The useless function works!!!' + text//END
//);
//
//var arrayToSort=[213, 16, 2058, 54, 10, 1965, 57, 9];
//sortedArray=arrayToSort.sort();
//console.log(sortedArray);
//
////Function naming order assertion
//function isNimble(){
//    return true;
//}
//
//assert(typeof window.isNimble()==="function", "isNimmbe defined" );
//assert(isNimble().name==='isNimble', 'isNimble has a name');
//
//var canFly=function(){
//    return true;
//};
//
//canFly();
//
//assert(typeof  window.canFly()==='function', 'canfly DEFINED');
//assert(canFly().name==='', 'can fly has no name');
//
//
//
//window.isDeadly =function(){
//    return true;
//};
//
//assert(typeof window.isDeadly()==='function');
//function growth(paramZCHAIN){
//    var chain=[],
//        intNumberofConnectors= 5,
//        strAtomType="vanadium";
//    console.log(chain+intNumberofConnectors+ strAtomType + paramZCHAIN);
//
//}
//                assert(typeof inner()==="function",
//                'inner() in scope after declaration';)
//                assert(window.inner===undefined, 'inner() in not global scope');
//}
//var nitrogen;
//switch (nitrogen){
//    case 1:
//        console.log('basic mixture');
//        break;
//    case 2:
//        console.log('more advansed mixture');
//        break;
//
//outer();
//assert(window.inner === undefined, "inner still not in global scope");
//
//window.wieldsSword = function swingSword() {
//    return true;
//};
//assert(window,wieldsSword().name==='swingsSword', 'wieldSword - real name is swingsSword');

document.writeln('Domo Dominatus');

Function.prototype.method=function(name, func){
    this.prototype[name]=func;
    return this;
};


