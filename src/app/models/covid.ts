export class Covid {
     Active_Cases_text: string;
Country_text: string;
Total_Cases_text:string;
Total_Deaths_text:string;
Total_Recovered_text:string;
    constructor(  Active_Cases_text?: string,Country_text?: string,Total_Cases_text?:string,Total_Deaths_text?:string, Total_Recovered_text?:string)
    {
        this.Active_Cases_text = Active_Cases_text;
        this.Country_text=Country_text;
        this.Total_Cases_text=Total_Cases_text;
        this.Total_Deaths_text=Total_Deaths_text;
        this.Total_Recovered_text=Total_Recovered_text;
    }
}
