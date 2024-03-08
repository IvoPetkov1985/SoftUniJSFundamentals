function foreignLanguages(countryName) {
    let output = "";

    if (countryName === "England" || countryName === "USA") {
        output = "English";
    } else if (countryName === "Spain" || countryName === "Mexico" || countryName === "Argentina") {
        output = "Spanish";
    } else {
        output = "unknown";
    }

    console.log(output);
}

foreignLanguages("USA");
foreignLanguages("Mexico");
foreignLanguages("Germany");

function foreignLangs(country) {
    const spanishLangCountries = ["Spain", "Argentina", "Mexico"];
    const englishLangCountries = ["England", "USA"];
    let result = "";

    if (spanishLangCountries.includes(country)) {
        result = "Spanish";
    } else if (englishLangCountries.includes(country)) {
        result = "English";
    } else {
        result = "unknown";
    }

    console.log(result);
}

foreignLangs("USA");
foreignLangs("Mexico");
foreignLangs("Germany");