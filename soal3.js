function Tulisan(tulisan1, tulisan2) {
    if (tulisan1.length == tulisan2.length){ 
        console.log(true);  
    }
    else {
        console.log(false);
    }
}
Tulisan(`AB`, `CD`);
Tulisan(`ABC`, `DE`);
Tulisan(`hello`, `edabit`)