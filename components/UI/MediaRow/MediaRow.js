import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from 'react';

const MediaRow = (props) => {
    const [loadingData, setLoadingData] = useState(true)

    const loopComp = (comp, digit) => {
        let thumbnails = []
        for (let i = 1; i < digit; i++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    const showThumbnails = () => {
        setTimeout(() => setLoadingData(false), 3000)
        return loadingData
            ? loopComp((<Skeleton />), 10)
            : loopComp((<Thumbnail />), 10)
    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}
            </div>
        </div>
    );
};

const Thumbnail = () => {
    return (
        <div className="media-row__thumbnail">
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543" alt="" />
            <div className="media-row__top-layer">
                <i className="fas fa-play" />
            </div>
        </div>
    )
}

const Skeleton = () => {
    return (
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img">

            </div>
        </div>
    )
}

export default MediaRow;