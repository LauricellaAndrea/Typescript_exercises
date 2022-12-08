/**
 * START: Follow the instructions below.
 */


// Add a tuple type annotation for this tuple.
// Una tupla è un array con una lunghezza predefinita e tipi predefiniti

type CountryTypePopulation = [string, number]; 

const countryPopulation: CountryTypePopulation = ["China", 1_412_600_000];

// Change the `CountryTypePopulation` type into a tuple type.
// This should fix the type error on Line 14.

type CountryTypeCurrency = [string, string, string];

const countryCurrency: CountryTypeCurrency = ["Italy", "Euro", "EUR"];

// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.

type countryTypeLanguage = readonly [string, string]

const countryLanguage: countryTypeLanguage = ["Greece", "Greek"];

// countryLanguage.reverse();

console.log(countryLanguage);

// ----

export {};