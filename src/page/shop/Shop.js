import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import SHOP_DATA from './shop.data'

class Shop extends React.Component {
    constructor(props){
        super(props)

        this.state={
            collections : SHOP_DATA
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop
