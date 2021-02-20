function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse= array.reverse();
    return cadena == reverse.join("") ? "La palabra es palindromo": "La palabra no es palindromo"
}

console.log(esPalindromo("oso"))