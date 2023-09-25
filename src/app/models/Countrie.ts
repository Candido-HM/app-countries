export class Countrie{
    constructor(
    public name: {
        common: string;
    },
    public population: number,
    public region: string,
    public capital: string,
    public subRregion: string,
    public topLevelDomain: string,
    public currencies: string,
    public languages: string,
    public flags: {
        png: string,
        svg: string
    }
    )
    { }
}