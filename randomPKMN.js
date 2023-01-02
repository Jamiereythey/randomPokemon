// function that generates a random Pokemon based on its National Dex number and returns the value in a <div>

function randomPokemon() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const result = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-1').innerHTML = result.toString();
}

function randomPokemon2() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const resultBox2 = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-2').innerHTML = resultBox2.toString();
}

function randomPokemon3() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const resultBox3 = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-3').innerHTML = resultBox3.toString();
}

function randomPokemon4() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const resultBox4 = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-4').innerHTML = resultBox4.toString();
}

function randomPokemon5() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const resultBox5 = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-5').innerHTML = resultBox5.toString();
}

function randomPokemon6() {
    let randomNum = Math.ceil(Math.random() * 151);
    let pokemon;
    switch (randomNum) {
        case 1:
            pokemon = "Bulbasaur";
            break;
        case 2:
            pokemon = "Ivysaur";
            break;
        case 3:
            pokemon = "Venusaur";
            break;
        case 4:
            pokemon = "Charmander";
            break;
        case 5:
            pokemon = "Charmeleon";
            break;
        case 6:
            pokemon = "Charizard";
            break;
        case 7:
            pokemon = "Squirtle";
            break;
        case 8:
            pokemon = "Wartortle";
            break;
        case 9:
            pokemon = "Blastoise";
            break;
        case 10:
            pokemon = "Caterpie";
            break;
        case 11:
            pokemon = "Metapod";
            break;
        case 12:
            pokemon = "Butterfree";
            break;
        case 13:
            pokemon = "Weedle";
            break;
        case 14:
            pokemon = "Kakuna";
            break;
        case 15:
            pokemon = "Beedrill";
            break;
        case 16:
            pokemon = "Pidgey";
            break;
        case 17:
            pokemon = "Pidgeotto";
            break;
        case 18:
            pokemon = "Pidgeot";
            break;
        case 19:
            pokemon = "Rattata";
            break;
        case 20:
            pokemon = "Raticate";
            break;
        case 21:
            pokemon = "Spearow";
            break;
        case 22:
            pokemon = "Fearow";
            break;
        case 23:
            pokemon = "Ekans";
            break;
        case 24:
            pokemon = "Arbok";
            break;
        case 25:
            pokemon = "Pikachu";
            break;
        case 26:
            pokemon = "Raichu";
            break;
        case 27:
            pokemon = "Sandshrew";
            break;
        case 28:
            pokemon = "Sandslash";
            break;
        case 29:
            pokemon = "Nidoran♀";
            break;
        case 30:
            pokemon = "Nidorina";
            break;
        case 31:
            pokemon = "Nidoqueen";
            break;
        case 32:
            pokemon = "Nidoran♂";
            break;
        case 33:
            pokemon = "Nidorino";
            break;
        case 34:
            pokemon = "Nidoking";
            break;
        case 35:
            pokemon = "Clefairy";
            break;
        case 36:
            pokemon = "Clefable";
            break;
        case 37:
            pokemon = "Vulpix";
            break;
        case 38:
            pokemon = "Ninetales";
            break;
        case 39:
            pokemon = "Jigglypuff";
            break;
        case 40:
            pokemon = "Wigglytuff";
            break;
        case 41:
            pokemon = "Zubat";
            break;
        case 42:
            pokemon = "Golbat";
            break;
        case 43:
            pokemon = "Oddish";
            break;
        case 44:
            pokemon = "Gloom";
            break;
        case 45:
            pokemon = "Vileplume";
            break;
        case 46:
            pokemon = "Paras";
            break;
        case 47:
            pokemon = "Parasect";
            break;
        case 48:
            pokemon = "Venonat";
            break;
        case 49:
            pokemon = "Venomoth";
            break;
        case 50:
            pokemon = "Diglett";
            break;
        case 51:
            pokemon = "Dugtrio";
            break;
        case 52:
            pokemon = "Meowth";
            break;
        case 53:
            pokemon = "Persian";
            break;
        case 54:
            pokemon = "Psyduck";
            break;
        case 55:
            pokemon = "Golduck";
            break;
        case 56:
            pokemon = "Mankey";
            break;
        case 57:
            pokemon = "Primeape";
            break;
        case 58:
            pokemon = "Growlithe";
            break;
        case 59:
            pokemon = "Arcanine";
            break;
        case 60:
            pokemon = "Poliwag";
            break;
        case 61:
            pokemon = "Poliwhirl";
            break;
        case 62:
            pokemon = "Poliwrath";
            break;
        case 63:
            pokemon = "Abra";
            break;
        case 64:
            pokemon = "Kadabra";
            break;
        case 65:
            pokemon = "Alakazam";
            break;
        case 66:
            pokemon = "Machop";
            break;
        case 67:
            pokemon = "Machoke";
            break;
        case 68:
            pokemon = "Machamp";
            break;
        case 69:
            pokemon = "Bellsprout";
            break;
        case 70:
            pokemon = "Weepinbell";
            break;
        case 71:
            pokemon = "Victreebel";
            break;
        case 72:
            pokemon = "Tentacool";
            break;
        case 73:
            pokemon = "Tentacruel";
            break;
        case 74:
            pokemon = "Geodude";
            break;
        case 75:
            pokemon = "Graveler";
            break;
        case 76:
            pokemon = "Golem";
            break;
        case 77:
            pokemon = "Ponyta";
            break;
        case 78:
            pokemon = "Rapidash";
            break;
        case 79:
            pokemon = "Slowpoke";
            break;
        case 80:
            pokemon = "Slowbro";
            break;
        case 81:
            pokemon = "Magnemite";
            break;
        case 82:
            pokemon = "Magneton";
            break;
        case 83:
            pokemon = "Farfetch'd";
            break;
        case 84:
            pokemon = "Doduo";
            break;
        case 85:
            pokemon = "Dodrio";
            break;
        case 86:
            pokemon = "Seel";
            break;
        case 87:
            pokemon = "Dewgong";
            break;
        case 88:
            pokemon = "Grimer";
            break;
        case 89:
            pokemon = "Muk";
            break;
        case 90:
            pokemon = "Shellder";
            break;
        case 91:
            pokemon = "Cloyster";
            break;
        case 92:
            pokemon = "Gastly";
            break;
        case 93:
            pokemon = "Haunter";
            break;
        case 94:
            pokemon = "Gengar";
            break;
        case 95:
            pokemon = "Onix";
            break;
        case 96:
            pokemon = "Drowzee";
            break;
        case 97:
            pokemon = "Hypno";
            break;
        case 98:
            pokemon = "Krabby";
            break;
        case 99:
            pokemon = "Kingler";
            break;
        case 100:
            pokemon = "Voltorb";
            break;
        case 101:
            pokemon = "Electrode";
            break;
        case 102:
            pokemon = "Exeggcute";
            break;
        case 103:
            pokemon = "Exeggutor";
            break;
        case 104:
            pokemon = "Cubone";
            break;
        case 105:
            pokemon = "Marowak";
            break;
        case 106:
            pokemon = "Hitmonlee";
            break;
        case 107:
            pokemon = "Hitmonchan";
            break;
        case 108:
            pokemon = "Lickitung";
            break;
        case 109:
            pokemon = "Koffing";
            break;
        case 110:
            pokemon = "Weezing";
            break;
        case 111:
            pokemon = "Rhyhorn";
            break;
        case 112:
            pokemon = "Rhydon";
            break;
        case 113:
            pokemon = "Chansey";
            break;
        case 114:
            pokemon = "Tangela";
            break;
        case 115:
            pokemon = "Kangaskhan";
            break;
        case 116:
            pokemon = "Horsea";
            break;
        case 117:
            pokemon = "Seadra";
            break;
        case 118:
            pokemon = "Goldeen";
            break;
        case 119:
            pokemon = "Seaking";
            break;
        case 120:
            pokemon = "Staryu";
            break;
        case 121:
            pokemon = "Starmie";
            break;
        case 122:
            pokemon = "Mr. Mime";
            break;
        case 123:
            pokemon = "Scyther";
            break;
        case 124:
            pokemon = "Jynx";
            break;
        case 125:
            pokemon = "Electabuzz";
            break;
        case 126:
            pokemon = "Magmar";
            break;
        case 127:
            pokemon = "Pinsir";
            break;
        case 128:
            pokemon = "Tauros";
            break;
        case 129:
            pokemon = "Magikarp";
            break;
        case 130:
            pokemon = "Gyarados";
            break;
        case 131:
            pokemon = "Lapras";
            break;
        case 132:
            pokemon = "Ditto";
            break;
        case 133:
            pokemon = "Eevee";
            break;
        case 134:
            pokemon = "Vaporeon";
            break;
        case 135:
            pokemon = "Jolteon";
            break;
        case 136:
            pokemon = "Flareon";
            break;
        case 137:
            pokemon = "Porygon";
            break;
        case 138:
            pokemon = "Omanyte";
            break;
        case 139:
            pokemon = "Omastar";
            break;
        case 140:
            pokemon = "Kabuto";
            break;
        case 141:
            pokemon = "Kabutops";
            break;
        case 142:
            pokemon = "Aerodactyl";
            break;
        case 143:
            pokemon = "Snorlax";
            break;
        case 144:
            pokemon = "Articuno";
            break;
        case 145:
            pokemon = "Zapdos";
            break;
        case 146:
            pokemon = "Moltres";
            break;
        case 147:
            pokemon = "Dratini";
            break;
        case 148:
            pokemon = "Dragonair";
            break;
        case 149:
            pokemon = "Dragonite";
            break;
         case 150:
            pokemon = "Mewtwo";
            break;
        case 151:
            pokemon = "Mew";
            break;
        default:
            pokemon = "Unknown";
    }
    
    // console.log(`National Pokedex No. ${randomNum}: ${pokemon}.`)
    
    const resultBox6 = `National Pokedex No. ${randomNum}: ${pokemon}.`

    document.getElementById('box-6').innerHTML = resultBox6.toString();
}
