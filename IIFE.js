/***
 * IIFE -> Imediatly Invoke function
 * Syntex -> ()()
 */

// declaring two IIFE

(function add(){
    console.log("Add Called")
})();

(()=>console.log("another called"))()