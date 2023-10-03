class Cliente {
  private constructor(private nome: string, private idade: number) {}
  public static criar(nome: string, idade: number): Cliente {
    return new Cliente(nome, idade);
  }
  print() {
    console.log(this.nome, this.idade);
  }
}

//const cliente = new Cliente("Maria",21);
const cliente = Cliente.criar("Maria",21);
cliente.print();
