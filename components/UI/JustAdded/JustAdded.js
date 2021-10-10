import React from 'react';

const JustAdded
    = () => {
        const loopComp = (comp, digit) => {
            let thumbnails = []
            for (let i = 1; i < digit; i++) {
                thumbnails.push(comp)
            }
            return thumbnails;
        }
        return (
            <div className="just-added">
                <h3 className="just-added__title">Just Added</h3>
                <div className="just-added__thumbnails">
                    {loopComp(<div className="just-added__thumbnail">
                        <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543" alt="" />
                        <div className="just-added__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 5)}
                </div>
            </div>
        );
    };

export default JustAdded;