// Generated by https://quicktype.io

export interface Hero {
    //Personal Information
    id:               string;
    book?:             string; //Libro al que pertenece esta versión del personaje
    name:             string;
    otherNames?:       string;
    titles:            string;
    bornDay?:          number;
    bornMonth?:        string;
    bornYear?:         string;
    bornAge?:          string;
    bornCity?:         string;
    bornRegion?:       string;
    bornKingdom?:      string;
    profession?:       string;
    alt_image?:        string;

    //Physical description
    race?: string;
    species?: string;
    animal?: string; //tonalli
    gender?: Gender; //M, F, other
    height?: number;    
    hair?: string;
    eyes?: string;
    skin?: string;
    distintive?: string;

    //Family
    father?: string;
    mother?: string;
    brothers?: string;
    famName?: string;      //Nombre de familiar nuevo
    famRelation?: string;  //Que relacion familiar tiene para el pj?
    
    //History (description)
    resume?: string; //Quien es y qué eventos dieron forma a quien es en el presente.
    
    // Por añadir: 
    //Personality
    strengths?: string;
    weak: string; //defectos
    wishes?: string;
    fears?: string;
    motivations?: string;
    likes?: string; //Cosas que le gustan
    hates?: string; //Cosas que odia

    //Objetives
    goals?: string;       //¿Qué busca lograr el personaje a corto y largo plazo? 
    aspirations?: string; //¿Cuáles son sus aspiraciones?

    //Relations
    friends?: string;
    enemies?: string;
    romance?: string;        

    //Plot
    changes?: string; //¿Experimentará cambios significativos en su personalidad, valores o metas?        
}

export interface Fortaleza  {
    fuerza?: string;
}

export enum Gender {
    Male = "Masculino",
    Female = "Femenino",
    Other = "Otro"
}