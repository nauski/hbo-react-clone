import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import Posterview from '../components/UI/PosterView/PosterView'


export default function Home() {
    return (
        <MainLayout>
            <FeaturedMedia />
            <Posterview />
            <CastInfo />
        </MainLayout>
    )
}
