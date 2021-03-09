import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import {PRODUCTS} from '../service/gamesService'
import { Button } from 'primereact/button'
import { receberGames } from '../service/salvarGame'
import { withRouter } from 'react-router-dom'

class Checkout extends React.Component {
    
    state = {
      games : []
    }

    header = (
      <div className="table-header">
            Games
      </div>
    )

    salvar = () =>{
      const games = this.state.games;
      receberGames(games);
      this.props.history.push('/cart')
    }

    formatCurrency = (valor) => {
      return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }

    imageTemplate = (rowData) => {
      return <img src={`../assets/${rowData.image}`} className="product-image"/>;
    }

    priceTemplate = (rowData) => {
      return this.formatCurrency(rowData.price);
    }

    scoreTemplate = (rowData) => {
      return <span>{rowData.score}</span>
    }

    render(){
        return(
          <div className="datatable-templating-demo">
              <div className="card">
                  <DataTable value={PRODUCTS} header={this.header} selection={this.state.games} onSelectionChange={e => this.setState( {games: e.value })} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column header="Nome" field="name" sortable></Column>
                    <Column header="Preço" field="price" body={this.priceTemplate} sortable></Column>
                    <Column header="Score" field="score" body={this.scoreTemplate} sortable></Column>
                    <Column header="imagem" body={this.imageTemplate}> </Column>
                  </DataTable>
              </div>
            <Button label="Enviar" onClick={this.salvar} />
          </div>
        )
    }
  }

export default withRouter( Checkout )