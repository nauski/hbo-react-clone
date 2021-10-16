import AuthCheck from '../components/AuthCheck'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../components/UI/MediaRow/MediaRow'

export default function Home() {
    return AuthCheck(
        <MainLayout>
            <FeaturedMedia />
            <MediaRow title="More like this" type="small-v" />
            <CastInfo />
        </MainLayout>
    )
}
