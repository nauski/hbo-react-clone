import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useStateContext } from '../components/HBOProvider'
import { useRouter } from 'next/router'
import Login from '../components/UI/Login/Login'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import Posterview from '../components/UI/PosterView/PosterView'
import AuthCheck from '../components/AuthCheck'


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()

  useEffect(() => {

  }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <Posterview />
    </MainLayout>
  )
}
