import React from 'react';
import Image from 'next/image'


const Posterview
    = () => {
        const loopComp = (comp, digit) => {
            let thumbnails = []
            for (let i = 1; i < digit; i++) {
                thumbnails.push(comp)
            }
            return thumbnails;
        }
        return (
            <div className="poster-view">
                <h3 className="poster-view__title">Movies</h3>
                <div className="poster-view__thumbnails">
                    {loopComp(<div className="poster-view__thumbnail">
                        <Image src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543" layout="fill" objectFit="cover" objectPosition="center" alt="" />
                        <div className="poster-view__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>, 10)}
                </div>
            </div>
        );
    };

export default Posterview;