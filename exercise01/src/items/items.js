
define(
    ['./itemTypes.js'],
    function(itemTypes) {
        var items =  [
            {
                "id": 0,
                "name": "Laurel",
                "image": "http://placehold.it/32x32",
                "desc": "Neal",
                "price": "$388",
                "limit": 4
            },
            {
                "id": 1,
                "name": "Ester",
                "image": "http://placehold.it/32x32",
                "desc": "Cooley",
                "price": "$9842",
                "limit": 9
            },
            {
                "id": 2,
                "name": "Tricia",
                "image": "http://placehold.it/32x32",
                "desc": "Thornton",
                "price": "$7413",
                "limit": 6
            },
            {
                "id": 3,
                "name": "Mona",
                "image": "http://placehold.it/32x32",
                "desc": "Randolph",
                "price": "$1371",
                "limit": 3
            },
            {
                "id": 4,
                "name": "Delaney",
                "image": "http://placehold.it/32x32",
                "desc": "Holland",
                "price": "$1246",
                "limit": 7
            },
            {
                "id": 5,
                "name": "Leanna",
                "image": "http://placehold.it/32x32",
                "desc": "Downs",
                "price": "$7023",
                "limit": 3
            },
            {
                "id": 6,
                "name": "Loretta",
                "image": "http://placehold.it/32x32",
                "desc": "Roth",
                "price": "$985",
                "limit": 6
            },
            {
                "id": 7,
                "name": "Cole",
                "image": "http://placehold.it/32x32",
                "desc": "Dudley",
                "price": "$3947",
                "limit": 7
            },
            {
                "id": 8,
                "name": "Juliette",
                "image": "http://placehold.it/32x32",
                "desc": "Spencer",
                "price": "$3535",
                "limit": 7
            },
            {
                "id": 9,
                "name": "Tracy",
                "image": "http://placehold.it/32x32",
                "desc": "Wright",
                "price": "$9161",
                "limit": 6
            },
            {
                "id": 10,
                "name": "Kristy",
                "image": "http://placehold.it/32x32",
                "desc": "Hardy",
                "price": "$5690",
                "limit": 9
            },
            {
                "id": 11,
                "name": "Fanny",
                "image": "http://placehold.it/32x32",
                "desc": "Wiley",
                "price": "$3745",
                "limit": 3
            },
            {
                "id": 12,
                "name": "Carol",
                "image": "http://placehold.it/32x32",
                "desc": "Whitehead",
                "price": "$5863",
                "limit": 6
            },
            {
                "id": 13,
                "name": "Ray",
                "image": "http://placehold.it/32x32",
                "desc": "Camacho",
                "price": "$7691",
                "limit": 3
            },
            {
                "id": 14,
                "name": "Christina",
                "image": "http://placehold.it/32x32",
                "desc": "Nicholson",
                "price": "$3432",
                "limit": 7
            },
            {
                "id": 15,
                "name": "Shepherd",
                "image": "http://placehold.it/32x32",
                "desc": "Burt",
                "price": "$7529",
                "limit": 4
            },
            {
                "id": 16,
                "name": "Charmaine",
                "image": "http://placehold.it/32x32",
                "desc": "Tate",
                "price": "$2795",
                "limit": 5
            },
            {
                "id": 17,
                "name": "Frederick",
                "image": "http://placehold.it/32x32",
                "desc": "Rios",
                "price": "$9594",
                "limit": 9
            },
            {
                "id": 18,
                "name": "Sheree",
                "image": "http://placehold.it/32x32",
                "desc": "Leon",
                "price": "$7104",
                "limit": 6
            },
            {
                "id": 19,
                "name": "Dodson",
                "image": "http://placehold.it/32x32",
                "desc": "Battle",
                "price": "$392",
                "limit": 4
            },
            {
                "id": 20,
                "name": "Mayer",
                "image": "http://placehold.it/32x32",
                "desc": "Rose",
                "price": "$4944",
                "limit": 4
            },
            {
                "id": 21,
                "name": "Atkins",
                "image": "http://placehold.it/32x32",
                "desc": "Cooke",
                "price": "$4458",
                "limit": 8
            },
            {
                "id": 22,
                "name": "Lilian",
                "image": "http://placehold.it/32x32",
                "desc": "Little",
                "price": "$5237",
                "limit": 9
            },
            {
                "id": 23,
                "name": "Bradley",
                "image": "http://placehold.it/32x32",
                "desc": "Hendrix",
                "price": "$877",
                "limit": 6
            },
            {
                "id": 24,
                "name": "Ashley",
                "image": "http://placehold.it/32x32",
                "desc": "Shaw",
                "price": "$9398",
                "limit": 3
            },
            {
                "id": 25,
                "name": "Wyatt",
                "image": "http://placehold.it/32x32",
                "desc": "Cervantes",
                "price": "$3670",
                "limit": 9
            },
            {
                "id": 26,
                "name": "Herman",
                "image": "http://placehold.it/32x32",
                "desc": "Hutchinson",
                "price": "$270",
                "limit": 3
            },
            {
                "id": 27,
                "name": "Martina",
                "image": "http://placehold.it/32x32",
                "desc": "Townsend",
                "price": "$5253",
                "limit": 3
            },
            {
                "id": 28,
                "name": "Collins",
                "image": "http://placehold.it/32x32",
                "desc": "Davis",
                "price": "$1624",
                "limit": 9
            },
            {
                "id": 29,
                "name": "Mable",
                "image": "http://placehold.it/32x32",
                "desc": "Powell",
                "price": "$6368",
                "limit": 6
            },
            {
                "id": 30,
                "name": "Elliott",
                "image": "http://placehold.it/32x32",
                "desc": "Mckay",
                "price": "$1175",
                "limit": 9
            },
            {
                "id": 31,
                "name": "Hodges",
                "image": "http://placehold.it/32x32",
                "desc": "Copeland",
                "price": "$5357",
                "limit": 6
            },
            {
                "id": 32,
                "name": "Margret",
                "image": "http://placehold.it/32x32",
                "desc": "Britt",
                "price": "$6672",
                "limit": 9
            },
            {
                "id": 33,
                "name": "Odessa",
                "image": "http://placehold.it/32x32",
                "desc": "Simmons",
                "price": "$2304",
                "limit": 9
            },
            {
                "id": 34,
                "name": "Monroe",
                "image": "http://placehold.it/32x32",
                "desc": "Bell",
                "price": "$4102",
                "limit": 3
            },
            {
                "id": 35,
                "name": "Sheryl",
                "image": "http://placehold.it/32x32",
                "desc": "Rivera",
                "price": "$4964",
                "limit": 7
            },
            {
                "id": 36,
                "name": "Roxanne",
                "image": "http://placehold.it/32x32",
                "desc": "Sweet",
                "price": "$1333",
                "limit": 3
            },
            {
                "id": 37,
                "name": "Elena",
                "image": "http://placehold.it/32x32",
                "desc": "Santos",
                "price": "$4907",
                "limit": 3
            },
            {
                "id": 38,
                "name": "Arnold",
                "image": "http://placehold.it/32x32",
                "desc": "Ayers",
                "price": "$4416",
                "limit": 8
            },
            {
                "id": 39,
                "name": "Phelps",
                "image": "http://placehold.it/32x32",
                "desc": "Page",
                "price": "$2310",
                "limit": 7
            },
            {
                "id": 40,
                "name": "Whitaker",
                "image": "http://placehold.it/32x32",
                "desc": "Wagner",
                "price": "$4928",
                "limit": 5
            },
            {
                "id": 41,
                "name": "Shannon",
                "image": "http://placehold.it/32x32",
                "desc": "Robinson",
                "price": "$2316",
                "limit": 6
            },
            {
                "id": 42,
                "name": "Cynthia",
                "image": "http://placehold.it/32x32",
                "desc": "Vega",
                "price": "$4817",
                "limit": 6
            },
            {
                "id": 43,
                "name": "Nash",
                "image": "http://placehold.it/32x32",
                "desc": "Baker",
                "price": "$4487",
                "limit": 6
            },
            {
                "id": 44,
                "name": "Bonita",
                "image": "http://placehold.it/32x32",
                "desc": "Park",
                "price": "$3519",
                "limit": 9
            },
            {
                "id": 45,
                "name": "Constance",
                "image": "http://placehold.it/32x32",
                "desc": "Lawrence",
                "price": "$2283",
                "limit": 7
            },
            {
                "id": 46,
                "name": "Cleo",
                "image": "http://placehold.it/32x32",
                "desc": "Dennis",
                "price": "$7981",
                "limit": 8
            },
            {
                "id": 47,
                "name": "Maureen",
                "image": "http://placehold.it/32x32",
                "desc": "Bernard",
                "price": "$5095",
                "limit": 7
            },
            {
                "id": 48,
                "name": "Jacobs",
                "image": "http://placehold.it/32x32",
                "desc": "Ruiz",
                "price": "$3985",
                "limit": 7
            },
            {
                "id": 49,
                "name": "Tran",
                "image": "http://placehold.it/32x32",
                "desc": "Stone",
                "price": "$2142",
                "limit": 3
            },
            {
                "id": 50,
                "name": "Carlson",
                "image": "http://placehold.it/32x32",
                "desc": "Schroeder",
                "price": "$7492",
                "limit": 5
            },
            {
                "id": 51,
                "name": "Nicholson",
                "image": "http://placehold.it/32x32",
                "desc": "Anderson",
                "price": "$765",
                "limit": 7
            },
            {
                "id": 52,
                "name": "Bowen",
                "image": "http://placehold.it/32x32",
                "desc": "Chase",
                "price": "$3738",
                "limit": 7
            },
            {
                "id": 53,
                "name": "Patsy",
                "image": "http://placehold.it/32x32",
                "desc": "Duran",
                "price": "$6527",
                "limit": 8
            },
            {
                "id": 54,
                "name": "Queen",
                "image": "http://placehold.it/32x32",
                "desc": "Roman",
                "price": "$7164",
                "limit": 8
            },
            {
                "id": 55,
                "name": "Gould",
                "image": "http://placehold.it/32x32",
                "desc": "Benton",
                "price": "$7090",
                "limit": 9
            },
            {
                "id": 56,
                "name": "Ortega",
                "image": "http://placehold.it/32x32",
                "desc": "Johns",
                "price": "$133",
                "limit": 4
            },
            {
                "id": 57,
                "name": "Thompson",
                "image": "http://placehold.it/32x32",
                "desc": "Case",
                "price": "$2200",
                "limit": 4
            },
            {
                "id": 58,
                "name": "Robin",
                "image": "http://placehold.it/32x32",
                "desc": "Chaney",
                "price": "$9591",
                "limit": 3
            },
            {
                "id": 59,
                "name": "Christy",
                "image": "http://placehold.it/32x32",
                "desc": "Richards",
                "price": "$9395",
                "limit": 9
            },
            {
                "id": 60,
                "name": "Cherry",
                "image": "http://placehold.it/32x32",
                "desc": "Gamble",
                "price": "$2878",
                "limit": 4
            },
            {
                "id": 61,
                "name": "Murphy",
                "image": "http://placehold.it/32x32",
                "desc": "Clark",
                "price": "$1434",
                "limit": 8
            },
            {
                "id": 62,
                "name": "Rochelle",
                "image": "http://placehold.it/32x32",
                "desc": "Yang",
                "price": "$1827",
                "limit": 9
            },
            {
                "id": 63,
                "name": "Roxie",
                "image": "http://placehold.it/32x32",
                "desc": "Ortiz",
                "price": "$8705",
                "limit": 6
            },
            {
                "id": 64,
                "name": "Stokes",
                "image": "http://placehold.it/32x32",
                "desc": "Noel",
                "price": "$4643",
                "limit": 8
            },
            {
                "id": 65,
                "name": "Mcbride",
                "image": "http://placehold.it/32x32",
                "desc": "Colon",
                "price": "$282",
                "limit": 6
            },
            {
                "id": 66,
                "name": "Courtney",
                "image": "http://placehold.it/32x32",
                "desc": "Randall",
                "price": "$6082",
                "limit": 8
            },
            {
                "id": 67,
                "name": "Hopper",
                "image": "http://placehold.it/32x32",
                "desc": "Patton",
                "price": "$5560",
                "limit": 9
            },
            {
                "id": 68,
                "name": "Sargent",
                "image": "http://placehold.it/32x32",
                "desc": "Bryan",
                "price": "$359",
                "limit": 9
            },
            {
                "id": 69,
                "name": "Daphne",
                "image": "http://placehold.it/32x32",
                "desc": "Curry",
                "price": "$9177",
                "limit": 9
            },
            {
                "id": 70,
                "name": "Katharine",
                "image": "http://placehold.it/32x32",
                "desc": "Fischer",
                "price": "$349",
                "limit": 6
            },
            {
                "id": 71,
                "name": "Richardson",
                "image": "http://placehold.it/32x32",
                "desc": "Conrad",
                "price": "$2792",
                "limit": 5
            },
            {
                "id": 72,
                "name": "Taylor",
                "image": "http://placehold.it/32x32",
                "desc": "Navarro",
                "price": "$924",
                "limit": 4
            },
            {
                "id": 73,
                "name": "Andrews",
                "image": "http://placehold.it/32x32",
                "desc": "Hoover",
                "price": "$5340",
                "limit": 7
            },
            {
                "id": 74,
                "name": "Wagner",
                "image": "http://placehold.it/32x32",
                "desc": "Tanner",
                "price": "$4529",
                "limit": 8
            },
            {
                "id": 75,
                "name": "Suarez",
                "image": "http://placehold.it/32x32",
                "desc": "Lindsey",
                "price": "$2070",
                "limit": 7
            },
            {
                "id": 76,
                "name": "Ramirez",
                "image": "http://placehold.it/32x32",
                "desc": "Leach",
                "price": "$7261",
                "limit": 5
            },
            {
                "id": 77,
                "name": "Walker",
                "image": "http://placehold.it/32x32",
                "desc": "Sykes",
                "price": "$6645",
                "limit": 9
            },
            {
                "id": 78,
                "name": "Cannon",
                "image": "http://placehold.it/32x32",
                "desc": "Wyatt",
                "price": "$133",
                "limit": 8
            },
            {
                "id": 79,
                "name": "Mitchell",
                "image": "http://placehold.it/32x32",
                "desc": "Mccoy",
                "price": "$7100",
                "limit": 6
            },
            {
                "id": 80,
                "name": "Deborah",
                "image": "http://placehold.it/32x32",
                "desc": "Ray",
                "price": "$137",
                "limit": 8
            },
            {
                "id": 81,
                "name": "Morrow",
                "image": "http://placehold.it/32x32",
                "desc": "Grimes",
                "price": "$2186",
                "limit": 9
            },
            {
                "id": 82,
                "name": "Olson",
                "image": "http://placehold.it/32x32",
                "desc": "Zimmerman",
                "price": "$7615",
                "limit": 7
            },
            {
                "id": 83,
                "name": "Josefa",
                "image": "http://placehold.it/32x32",
                "desc": "Campbell",
                "price": "$9316",
                "limit": 9
            },
            {
                "id": 84,
                "name": "Bobbi",
                "image": "http://placehold.it/32x32",
                "desc": "Moore",
                "price": "$770",
                "limit": 9
            },
            {
                "id": 85,
                "name": "Christian",
                "image": "http://placehold.it/32x32",
                "desc": "Finley",
                "price": "$4586",
                "limit": 4
            },
            {
                "id": 86,
                "name": "Marla",
                "image": "http://placehold.it/32x32",
                "desc": "Mercado",
                "price": "$2903",
                "limit": 4
            },
            {
                "id": 87,
                "name": "Ethel",
                "image": "http://placehold.it/32x32",
                "desc": "Floyd",
                "price": "$4575",
                "limit": 9
            },
            {
                "id": 88,
                "name": "Ilene",
                "image": "http://placehold.it/32x32",
                "desc": "Maynard",
                "price": "$167",
                "limit": 8
            },
            {
                "id": 89,
                "name": "Paul",
                "image": "http://placehold.it/32x32",
                "desc": "Marshall",
                "price": "$969",
                "limit": 4
            },
            {
                "id": 90,
                "name": "Davidson",
                "image": "http://placehold.it/32x32",
                "desc": "Fuller",
                "price": "$5508",
                "limit": 5
            },
            {
                "id": 91,
                "name": "Cardenas",
                "image": "http://placehold.it/32x32",
                "desc": "Goodwin",
                "price": "$8698",
                "limit": 4
            },
            {
                "id": 92,
                "name": "Barber",
                "image": "http://placehold.it/32x32",
                "desc": "Watkins",
                "price": "$3443",
                "limit": 3
            },
            {
                "id": 93,
                "name": "Earlene",
                "image": "http://placehold.it/32x32",
                "desc": "Hopkins",
                "price": "$2065",
                "limit": 9
            },
            {
                "id": 94,
                "name": "Rich",
                "image": "http://placehold.it/32x32",
                "desc": "Green",
                "price": "$2131",
                "limit": 7
            },
            {
                "id": 95,
                "name": "Ollie",
                "image": "http://placehold.it/32x32",
                "desc": "Fernandez",
                "price": "$611",
                "limit": 9
            },
            {
                "id": 96,
                "name": "Copeland",
                "image": "http://placehold.it/32x32",
                "desc": "Wilcox",
                "price": "$3494",
                "limit": 8
            },
            {
                "id": 97,
                "name": "Clayton",
                "image": "http://placehold.it/32x32",
                "desc": "Estrada",
                "price": "$6909",
                "limit": 6
            },
            {
                "id": 98,
                "name": "Rush",
                "image": "http://placehold.it/32x32",
                "desc": "Sullivan",
                "price": "$7686",
                "limit": 7
            },
            {
                "id": 99,
                "name": "Casandra",
                "image": "http://placehold.it/32x32",
                "desc": "Petersen",
                "price": "$5931",
                "limit": 6
            }
        ];
        var itemInstances = [];

        function init(newItems) {
            itemInstances = [];
            items = newItems;
            for (var i = 0; i < items.length; i++) {
                if (i % 5 == 0) {
                    itemInstances.push(new itemTypes.OnSaleItem(items[i]));
                } else if (i % 7 == 0) {
                    itemInstances.push(new itemTypes.OutOfStockItem(items[i]));
                } else if (i % 3 == 0) {
                    itemInstances.push(new itemTypes.NewItem(items[i]));
                } else {
                    itemInstances.push(new itemTypes.BaseItem(items[i]));
                }
            }
            return itemInstances;
        }

        init(items);
        itemInstances.init = init;

        return itemInstances;
    }
);