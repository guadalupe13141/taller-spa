//Algoritmo de juego de cartas

let suizo = [["seis_de_escudos","siete_de_escudos","ocho_de_escudos","nueve_de_escudos","diez_de_escudos","escudero_de_escudos","caballo_de_escudos","rey_de_escudos",],
["seis_de_rosas","siete_de_rosas","ocho_de_rosas","nueve_de_rosas","diez_de_rosas","escudero_de_rosas","caballo_de_rosas","rey_de_rosas"],
["seis_de_campanas","siete_de_campanas","ocho_de_campanas","nueve_de_campanas","diez_de_campanas","escudero_de_campanas","caballo_de_campanas","rey_de_campanas"],
["seis_de_bellotas","siete_de_bellotas","ocho_de_bellotas","nueve_de_bellotas","diez_de_bellotas","escudero_de_bellotas","caballo_de_bellotas","rey_de_bellotas"]]

let frances = [["uno_de_corazones","dos_de_corazones","tres_de_corazones","cuatro_de_corazones","cinco_de_corazones","seis_de_corazones","siete_de_corazones","ocho_de_corazones","nueve_de_corazones","diez_de_corazones","jota_de_corazones","reina_de_corazones","rey_de_corazones","as_de_corazones"],
["uno_de_treboles","dos_de_treboles","tres_de_treboles","cuatro_de_treboles","cinco_de_treboles","seis_de_treboles","siete_de_treboles","ocho_de_treboles","nueve_de_treboles","diez_de_treboles","jota_de_treboles","reina_de_treboles","rey_de_treboles","as_de_treboles"],
["uno_de_diamantes","dos_de_diamantes","tres_de_diamantes","cuatro_de_diamantes","cinco_de_diamantes","seis_de_diamantes","siete_de_diamantes","ocho_de_diamantes","nueve_de_diamantes","diez_de_diamantes","jota_de_diamantes","reina_de_diamantes","rey_de_diamantes","as_de_diamantes"],
["uno_de_picas","dos_de_picas","tres_de_picas","cuatro_de_picas","cinco_de_picas","seis_de_picas","siete_de_picas","ocho_de_picas","nueve_de_picas","diez_de_picas","jota_de_picas","reina_de_picas","rey_de_picas","as_de_picas"]]

let español = [["uno_de_monedas","dos_de_monedas","tres_de_monedas","cuatro_de_monedas","cinco_de_monedas","seis_de_monedas","siete_de_monedas","ocho_de_monedas","nueve_de_monedas","diez_de_monedas","escudero_de_monedas","caballo_de_monedad","rey_de_monedas",],
["uno_de_copas","dos_de_copas","tres_de_copas","cuatro_de_copas","cinco_de_copas","seis_de_copas","siete_de_copas","ocho_de_copas","nueve_de_copas","diez_de_copas","escudero_de_copas","caballo_de_copas","rey_de_copas"],
["uno_de_espadas","dos_de_espadas","tres_de_espadas","cuatro_de_espadas","cinco_de_espadas","seis_de_espadas","siete_de_espadas","ocho_de_espadas","nueve_de_espadas","diez_de_espadas","escudero_de_espadas","caballo_de_espadas","rey_de_espadas"],
["uno_de_bastones","dos_de_bastones","tres_de_bastones","cuatro_de_bastones","cinco_de_bastones","seis_de_bastones","siete_de_bastones","ocho_de_bastones","nueve_de_bastones","diez_de_bastones","escudero_de_bastones","caballo_de_bastones","rey_de_bastones"]]

function solucion(tipo) {
    if(tipo==suizo){
        console.log("\nBARAJA SUIZA");
        return suizo;
    }
    if(tipo==español){
        console.log("\nBARAJA ESPAÑOLA");
        return español;
    }
    if(tipo==frances){
        console.log("\nBARAJA FRANCESA");
        return frances;
    }
    if(tipo==null)
        console.log("\nBARAJA FRANCESA");
        return frances;
}
 

console.log(solucion(suizo));