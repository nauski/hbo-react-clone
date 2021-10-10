import Head from 'next/head'
import Image from 'next/image'

export default function CreateUser() {
    return (
        <div>
            <div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo" />
                    <span className="create-user__title">
                        Who Is Watching?
                    </span>
                </div>
                <div className="create-user__form">
                    <Image src="https://randomuser.me/api/portraits/women/95.jpg" width="125px" height="125px" alt="" className="create-user__user-img" />
                    <div className="create-user__input-group">
                        <label>Name</label>
                        <input type="text" className="create-user__inputText" />
                        <div className="create-user__colors">
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(2,27,64)',
                                background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color" style={{
                                background: 'rgb(238,174,202)',
                                background: 'radial-gradient(135deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color" style={{
                                background: 'rgb(34,193,195)',
                                background: 'linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color" style={{
                                background: 'rgb(131,58,180)',
                                background: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color" style={{
                                background: 'rgb(131,58,180)',
                                background: 'linear-gradient(135deg, rgba(131,58,180,1) 22%, rgba(65,253,29,1) 43%, rgba(188,202,55,1) 83%, rgba(252,176,69,1) 100%)'
                            }} />
                        </div>
                    </div>
                </div>
                <div className="create-user__buttons">
                    <button className="create-user__cancel">Cancel</button>
                    <button className="create-user__save"> Save</button>
                </div>
            </div>
        </div>
    )
}
