//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


function seconds_in_planets(seconds, planetName) {
    const Mercury = 0.2408467;
    const Venus = 0.61519726;
    const Earth = 1; // 31557600 seconds
    const Mars = 1.8808158;
    const Jupiter = 11.862615;
    const Saturn = 29.447498;
    const Uranus = 84.016846;
    const Neptune = 164.79132;

    if (planetName === "Mercury") {

    } else if (planetName === "Venus") {
        return (seconds / 31557600) * Venus;
    } else if (planetName === "Earth") {
        return (seconds / 31557600) * Earth;
    } else if (planetName === "Mars") {
        return (seconds / 31557600) * Mars;
    } else if (planetName === "Jupiter") {
        return (seconds / 31557600) * Jupiter;
    } else if (planetName === "Saturn") {
        return (seconds / 31557600) * Saturn;
    } else if (planetName === "Uranus") {
        return (seconds / 31557600) * Uranus;
    } else if (planetName === "Neptune") {
        return (seconds / 31557600) * Neptune;
    } else if (planetName === "Mercury") {
        return (seconds / 31557600) * Mercury;
    }
}

console.log(seconds_in_planets(31557600, "Venus"))