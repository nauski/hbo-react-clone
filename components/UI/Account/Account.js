import React from 'react';

const Account = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = []
        for (let i = 1; i < digit; i++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="account">
            <div className="account__details">
                <div className="account__title">
                    My List
                </div>
                <div className="account__watch-list">
                    {loopComp((<div className="account__watch-video">
                        <img src="https://muropaketti.com/wp-content/uploads/2016/08/rick_and_morty-nosto-1024x576.jpg" alt="" />
                        <div className="account__watch-overlay">
                            <div className="account__watch-buttons">
                                <div className="account__watch-circle">
                                    <i className="fas fa-play" />
                                </div>
                                <div className="account__watch-circle">
                                    <i className="fas fa-times" />
                                </div>
                            </div>
                        </div>
                    </div>), 6)}

                </div>
            </div>
            <div className="account__menu">
                <ul className="account__main">
                    <li>
                        <a href="/">My List</a>
                    </li>
                </ul>
                <div className="side-nav__divider" />
                <ul className="account__main">
                    <li>
                        <a href="/" >Account</a>
                    </li>
                    <li>
                        <a href="/" >Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Account;