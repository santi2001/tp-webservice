export class Convert {
    result : string;
    to_type : string;
    from_value : string;
    from_type : string;
    constructor(result ? :string, to_type?: string, from_value ?: string,from_type ?: string)
    {
        this.result=result;
        this.from_value= from_value;
        this.to_type = to_type;
        this.from_type= from_type;
    }
}
