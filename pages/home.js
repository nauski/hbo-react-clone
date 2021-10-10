import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import Posterview from '../components/UI/PosterView/PosterView'


export default function Home() {
    return (
        <MainLayout>
            <FeaturedMedia />
            <ForYouList />
            <JustAdded />
            <Posterview />
        </MainLayout>
    )
}
