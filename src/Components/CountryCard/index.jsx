import React from "react";
import "./CountryCard.css";
import { useLocation, useNavigate } from "react-router-dom";

/*

{
    "name": {
        "common": "Wallis and Futuna",
        "official": "Territory of the Wallis and Futuna Islands",
        "nativeName": {
            "fra": {
                "official": "Territoire des îles Wallis et Futuna",
                "common": "Wallis et Futuna"
            }
        }
    },
    "tld": [
        ".wf"
    ],
    "cca2": "WF",
    "ccn3": "876",
    "cca3": "WLF",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
        "XPF": {
            "name": "CFP franc",
            "symbol": "₣"
        }
    },
    "idd": {
        "root": "+6",
        "suffixes": [
            "81"
        ]
    },
    "capital": [
        "Mata-Utu"
    ],
    "altSpellings": [
        "WF",
        "Territory of the Wallis and Futuna Islands",
        "Territoire des îles Wallis et Futuna"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "languages": {
        "fra": "French"
    },
    "translations": {
        "ara": {
            "official": "إقليم جزر واليس وفوتونا",
            "common": "واليس وفوتونا"
        },
        "bre": {
            "official": "Tiriad Inizi Wallis ha Futuna",
            "common": "Wallis ha Futuna"
        },
        "ces": {
            "official": "Teritorium ostrovů Wallis a Futuna",
            "common": "Wallis a Futuna"
        },
        "cym": {
            "official": "Territory of the Wallis and Futuna Islands",
            "common": "Wallis and Futuna"
        },
        "deu": {
            "official": "Gebiet der Wallis und Futuna",
            "common": "Wallis und Futuna"
        },
        "est": {
            "official": "Wallise ja Futuna ala",
            "common": "Wallis ja Futuna"
        },
        "fin": {
            "official": "Wallisin ja Futunan yhteisö",
            "common": "Wallis ja Futuna"
        },
        "fra": {
            "official": "Territoire des îles Wallis et Futuna",
            "common": "Wallis-et-Futuna"
        },
        "hrv": {
            "official": "Teritoriju Wallis i Futuna",
            "common": "Wallis i Fortuna"
        },
        "hun": {
            "official": "Wallis és Futuna",
            "common": "Wallis és Futuna"
        },
        "ita": {
            "official": "Territorio delle Isole Wallis e Futuna",
            "common": "Wallis e Futuna"
        },
        "jpn": {
            "official": "ウォリス·フツナ諸島の領土",
            "common": "ウォリス・フツナ"
        },
        "kor": {
            "official": "왈리스 퓌튀나",
            "common": "왈리스 퓌튀나"
        },
        "nld": {
            "official": "Grondgebied van de Wallis en Futuna",
            "common": "Wallis en Futuna"
        },
        "per": {
            "official": "جزایر والیس و فوتونا",
            "common": "والیس و فوتونا"
        },
        "pol": {
            "official": "Terytorium Wysp Wallis i Futuna",
            "common": "Wallis i Futuna"
        },
        "por": {
            "official": "Território das Ilhas Wallis e Futuna",
            "common": "Wallis e Futuna"
        },
        "rus": {
            "official": "Территория Уоллис и Футуна острова",
            "common": "Уоллис и Футуна"
        },
        "slk": {
            "official": "Teritórium ostrovov Wallis a Futuna",
            "common": "Wallis a Futuna"
        },
        "spa": {
            "official": "Territorio de las Islas Wallis y Futuna",
            "common": "Wallis y Futuna"
        },
        "srp": {
            "official": "Територија државе Валис и Футуна",
            "common": "Валис и Футуна"
        },
        "swe": {
            "official": "Territoriet Wallis- och Futunaöarna",
            "common": "Wallis- och Futunaöarna"
        },
        "tur": {
            "official": "Wallis ve Futuna Adaları Bölgesi",
            "common": "Wallis ve Futuna Adaları Bölgesi"
        },
        "urd": {
            "official": "سر زمینِ والس و فتونہ جزائر",
            "common": "والس و فتونہ"
        },
        "zho": {
            "official": "瓦利斯和富图纳群岛",
            "common": "瓦利斯和富图纳群岛"
        }
    },
    "latlng": [
        -13.3,
        -176.2
    ],
    "landlocked": false,
    "area": 142,
    "demonyms": {
        "eng": {
            "f": "Wallis and Futuna Islander",
            "m": "Wallis and Futuna Islander"
        }
    },
    "flag": "🇼🇫",
    "maps": {
        "googleMaps": "https://goo.gl/maps/CzVqK74QYtbHv65r5",
        "openStreetMaps": "https://www.openstreetmap.org/relation/3412448"
    },
    "population": 11750,
    "car": {
        "signs": [
            "F"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC+12:00"
    ],
    "continents": [
        "Oceania"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/wf.png",
        "svg": "https://flagcdn.com/wf.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            -13.95,
            -171.93
        ]
    },
    "postalCode": {
        "format": "#####",
        "regex": "^(986\\d{2})$"
    }
}

*/
const CountryCard = ({ country }) => {
    const navigate = useNavigate();
    return (
        <div
            className="CountryCard"
            onClick={e => {
                navigate(`/country/${country?.name?.common}`, {
                    state: { country }
                });
            }}
        >
            <div className="flag">
                <img src={country?.flags?.svg} alt="country-flag" />
            </div>
            <div className="lower">
                <h3>{country?.name?.common}</h3>
                <span>
                    <b>Population</b> :{" "}
                    {country?.population?.toLocaleString("en-US")}
                </span>
                <span>
                    <b>Region</b> : {country?.region}
                </span>
                <span>
                    <b>Capital</b> :
                    {country?.capital?.length > 0 ? country?.capital[0] : "NA"}
                </span>
            </div>
        </div>
    );
};

export default CountryCard;
