import React from 'react'

import { Carousel } from 'primereact/carousel'

import { PRODUCTS } from '../service/gamesService'

class Home extends React.Component{

    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    

    productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`../assets/${product.image}`} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                    </div>
                </div>
            </div>
        );
    }


    render(){
        return(
            <div className="datatable-templating-demo">
                <h1 className="display-3">Ecommerce Games</h1>
                <p className="lead">Esta é a melhor loja de games online.</p>
                <hr className="my-4" />
                <div className="card">
                    <Carousel value={PRODUCTS} numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={this.productTemplate} />
                </div>
            </div>
        )
    }
}

export default Home