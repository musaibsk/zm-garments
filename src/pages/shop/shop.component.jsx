import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        console.log('data', this.state.collections);
        const { collections } = this.state;
        return (
            <>
                {/* {this.state.collections.map((val) => (
                    <div key={val.id}>
                        <h2>{val.title}</h2>
                        {val.items.map((product) => (
                            <h3>{product.name}</h3>
                        ))}
                    </div>
                ))} */}
                <div className="shop-page">
                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        ))
                    }
                </div>

            </>

        )
    };
};

export default ShopPage;
