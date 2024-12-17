export const rankToTitle = (points: number) => {
    if(points <= 10) {
        return "עמית/ה חדש/ה";
    }
    if(points <= 50) {
        return "עמית/ה קרוב/ה";
    }    if(points <= 100) {
        return "עמית/ה חדש/ה";
    }    if(points <= 200) {
        return "עמית/ה חדש/ה";
    }
}