// demander la dimenssion de la matrice //
 let n = parseFloat(prompt("entrer la dimenssion n de la matrice :"));
 // initialiser la matrice vide //
 let a = new Array();
 for(let i=0; i<n ;i++) {
    a[i] = new Array(n);
 }
// lecture de la valeur de la matrice //
for (let i=0;i<n; i++) {
    for (let j = 0; j<n ;j++) {
        a[i][j] = 
        parseInt(prompt('entrer a[${i}][${j}] :'));
    }
}
// affichage de la matrice //
console.log("voici la matrice :");
for(let i=0;i<n;i++) {
    let ligne ="";
    for (let j=0;j<n;j++) {
        ligne += a[i][j] + "\t";
    }
    console.log(ligne);
}

