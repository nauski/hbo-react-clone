import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'

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
