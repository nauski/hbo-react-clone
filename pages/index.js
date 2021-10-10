import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>
        <div className="login-user__form">
          <div className="login-user__user-box">
            <Image src="https://randomuser.me/api/portraits/women/95.jpg" width="125px" height="125px" alt="" className="login-user__user-img" />
            <div className="login-user__username">Mary</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>
  )
}
