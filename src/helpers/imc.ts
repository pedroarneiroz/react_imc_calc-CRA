export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourImc?: number;
}

export const Levels: Level[] = [
    { title: "Magreza", color: "#93a6ab", icon: "down", imc: [0, 18.5] },
    { title: "Normal", color: "#0ead69", icon: "up", imc: [18.6, 24.9] },
    { title: "Sobrepeso", color: "#e2b039", icon: "down", imc: [25, 30] },
    { title: "Obsidade", color: "#c3423f", icon: "down", imc: [30.1, 99]}
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / ( height * height );
    
    for ( let i in Levels ) {
        if( imc >= Levels[i].imc[0] && imc < Levels[i].imc[1] ) {
            let levelCopy: Level = {...Levels[i]};

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return Levels[i];
        }
    }
    return null;
}

