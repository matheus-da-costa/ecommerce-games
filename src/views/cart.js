import React from 'react'
import {DataTable}from 'primereact/datatable'
import {Column} from 'primereact/column'
import {Button} from 'primereact/button'
import { games2 } from '../service/salvarGame'

class Cart extends React.Component{

    state = {
        shipping: 10
    }
    
    header = (
        <div className="table-header">
              Carrinho
        </div>
      )

    formatCurrency = (valor) => {
        return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }

    formatShipping = (valor) => {
        if(valor > 250){
            this.setState({shipping: 0});
            return this.formatCurrency(this.state.shipping);
        }else {
            return this.formatCurrency(this.state.shipping);
        }
    }

    priceTemplate = (rowData) => {
        return this.formatCurrency(rowData.price);
    }

    shippingTemplate = (rowData) => {
        return this.formatShipping(rowData.price);
    }

    somaTemplate = (rowData) => {
        const shipping = this.state.shipping;
        const soma = shipping + rowData.price;

        return this.formatCurrency(soma);
    }


    total = () => {
        let total = 0;
        for(let game2 of games2){
            total += game2.price;
        }
        if(total > 250){
            return this.formatCurrency(total);
        }else{
            let valorComFrete = this.state.shipping * games2.length;
            let soma = valorComFrete + total;
            return this.formatCurrency(soma);
        }
        
    }

    footer = `TOTAL: ${ this.total() }`;

    render(){
        return(
            <div className="datatable-templating-demo">
              <div className="card">
                  <DataTable value={games2} header={this.header} footer={this.footer}>
                    <Column header="Jogo" field="name"></Column>
                    <Column header="Preço" field="price" body={this.priceTemplate}></Column>
                    <Column header="Frete" body={this.shippingTemplate}></Column>
                    <Column header="Total" body={this.somaTemplate}> </Column>
                  </DataTable>
              </div>
            <Button label="Enviar"/>
          </div>
        )
    }
}

export default Cart