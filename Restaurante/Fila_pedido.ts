import { Bebida } from "./Bebidas";
import { Prato } from "./PratosP";
import { Sobremesa } from "./Sobremesas";
import { Pedido } from "./Pedido";

let pedido1 = new Pedido("Corbucci_Eats", []);
let pedido2 = new Pedido("Fabi_Giga", []);


function resolucao(pedido: Pedido, bebida: Bebida, prato: Prato, sobremesa: Sobremesa){

    return pedido.pedir_drink(bebida) && pedido.pedir_Dishes(prato) && pedido.pedir_Dissert(sobremesa)

}

resolucao(pedido1,Bebida.drink1,Prato.dishes1,Sobremesa.dessert1)
console.log("");
console.log("");
console.log(pedido1.info_Pedido());
console.log("");
console.log("");
resolucao(pedido2,Bebida.drink2,Prato.dishes2,Sobremesa.dessert2)
console.log("");
console.log("");
console.log(pedido2.info_Pedido());


