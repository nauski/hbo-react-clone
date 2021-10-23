import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage'
import { v4 } from 'uuid'
import { useRouter } from 'next/router';

export default function CreateUser() {
    const globalState = useStateContext();
    const router = useRouter();

    const saveUser = () => {
        let users = [], user

        if (ls('users') < 1) {
            user = {
                id: v4(),
                user: globalState.user,
                myListID: []
            }
            users.push(user)
            ls('users', users)
            router.push('/login')
            console.log('users', users)
            console.log('ls(users)', ls('users'))
        } else {
            users = ls('users')
            user = {
                id: v4(),
                user: globalState.user,
                myListID: []
            }
            users.push(user)
            ls('users', users)
            console.log('users', users)
            console.log('ls(users)', ls('users'))
            router.push('/login')
        }
    }

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
                    <img src={globalState.defaultUserImage} alt="" className="create-user__user-img" />
                    <div className="create-user__input-group">
                        <label>Name</label>
                        <input value={globalState.user} onChange={globalState.createUserAction} type="text" className="create-user__inputText" />
                        <div className="create-user__colors">
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(2,27,64)',
                                background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color" style={{
                                background: 'rgb(34,33,35)',
                                background: 'linear-gradient(135deg, rgba(34,33,35,1) 0%, rgba(253,187,45,1) 100%)'
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
                    <button className="create-user__save" onClick={saveUser}> Save</button>
                </div>
            </div>
        </div>
    )
}
