import React from 'react';
import Image from 'next/image'
import Account from '../Account/Account'
import SearchModal from '../SearchModal/SearchModal';
import { useStateContext } from '../../HBOProvider';

const Header = (props) => {
    const globalState = useStateContext();

    return (
        <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
            <div className="top-header__left-side">
                <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="top-header__search-btn" onClick={() => globalState.setSearchOpenAction(true)}>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="top-header__logo">

            </div>
            <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
                <Image src="https://randomuser.me/api/portraits/women/95.jpg" width={30} height={30} alt="" className="top-header__user-img" />
                <div className="top-header__user-name">Mary</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    );
};

export default Header;