class Carro{
    private _marca:string;
    private _modelo:string;
    private static contador:number = 0;

    constructor(_marca:string,_modelo:string){
        this._marca = _marca;
        this._modelo = _modelo;
        Carro.contador++;
    }

    public static getContador():number{
        return Carro.contador;
    }



    public get marca(){
        return this._marca;
    }

    public get modelo(){
        return this._modelo;
    }
}

//const carro = new Carro("VW","Gol");
//console.log(carro);

const a = new Carro ("Vw", "Gol");
const b = new Carro ("Fiat", "Uno");
const c = new Carro ("GM", "Corsa");
console.log(Carro.getContador());

export default Carro;