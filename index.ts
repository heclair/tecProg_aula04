/*class Pessoa{
    nome:string = "Ana";
    static idade:number = 20;

    imprimir(){
        console.log(this.nome, Pessoa.idade);
    }
}

//Objeto é a cópia 

const a = new Pessoa();
const b = new Pessoa();
a.nome = "Maria";
Pessoa.idade = 22;
a.imprimir();
b.imprimir();
*/

/*class Pessoa{
    nome:string;
    static cont:number = 0;

    constructor(nome:string){
        this.nome = nome;
        Pessoa.cont++;
    }
}

console.log("Cont:", Pessoa.cont);
new Pessoa("Ana");
console.log("Cont:", Pessoa.cont);
new Pessoa("Ana");
new Pessoa("Ana");
new Pessoa("Ana");
new Pessoa("Ana");
new Pessoa("Ana");
new Pessoa("Ana");
new Pessoa("Ana");
console.log("Cont:", Pessoa.cont);*/

/*class Pessoa{
    public nome:string;
    private idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    setIdade(idade:number){
        if(idade > 0){
            this.idade = idade;
        }
    }

    getIdade(){
        return this.idade;
    }
}

const a = new Pessoa("Ana",20);
console.log("Nome:",a.nome);
a.setIdade(-22);
console.log("Idade:",a.getIdade());*/

/*class Pessoa{
    public constructor(public nome:string, private idade:number){
    }

    setIdade(idade:number){
        if(idade > 0){
            this.idade = idade;
        }
    }

    getIdade(){
        return this.idade;
    }
}

const a = new Pessoa("Ana",20);
console.log("Nome:",a.nome);
a.setIdade(22);
console.log("Idade:",a.getIdade());*/

/*class Matematica{
    static somar(a:number,b:number){
        return a+b;
    }
    static dif(a:number,b:number){
        return a-b;
    }
}

//const c = new Matematica();
//console.log = (c.somar(2,2));
console.log( Matematica.somar(2,2));*/