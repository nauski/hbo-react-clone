import React from 'react';
import Image from 'next/image'

const ForYouList = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = []
        for (let i = 1; i < digit; i++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(<div className="foryou-list__thumbnail">
                    <Image src="https://muropaketti.com/wp-content/uploads/2016/08/rick_and_morty-nosto-1024x576.jpg" width="450" height="253" alt="" />
                    <div className="foryou-list__top-layer">
                        <i className="fas fa-play" />
                    </div>
                </div>, 5)}
            </div>
        </div>
    );
};

export default ForYouList;