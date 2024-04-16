import { Bebida } from "./Bebidas";
import { Prato } from "./PratosP";
import { Sobremesa } from "./Sobremesas";

export class Pedido {
    nome_cliente: string;
    pedido_cliente: string[];

    constructor( nome_cliente: string, pedido_cliente: string[]){
        this.nome_cliente = nome_cliente;
        this.pedido_cliente  = pedido_cliente;

    }

    info_Pedido(){
        return this.pedido_cliente
    }

    pedir_drink(bebida: Bebida){
        return this.pedido_cliente.push(bebida)
    }

    pedir_Dishes(prato: Prato){
        return this.pedido_cliente.push(prato)
    }

    pedir_Dissert(sobremesa: Sobremesa){
        return this.pedido_cliente.push(sobremesa)
    }



    

}