import { useRouter } from 'next/router'
import AuthCheck from '../../components/AuthCheck'
import MainLayout from '../../components/Layouts/MainLayout'
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import PlaceHolders from '../../components/UI/PlaceHolders/PlaceHolders'
import { useEffect, useState } from 'react'
import { useStateContext } from '../../components/HBOProvider'

export default function SingleMediaPage(props) {
    const router = useRouter()
    const globalState = useStateContext();
    const [mediaData, setMediaData] = useState(false)

    useEffect(() => {
        axios.post(`/api/path/movie/${props.query.id}`, {
            content: {
                path: `https://api.themoviedb.org/3/movie/${props.query.id}`,
            }
        })
            .then(function (response) {
                setMediaData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    debugger
    return AuthCheck(
        <MainLayout>

            <FeaturedMedia title={mediaData.title}
                mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
                location="In theaters and on HBO MAX. Streaming throughout May 23."
                linkUrl="/movies/id"
                type="single" />
            <LazyLoad height={680} offset={400} placeholder={<PlaceHolders title="Movies" type="large-v" />}>
                <MediaRow title="Similar To This" type="small-v" pathId={props.query.id} endpoint={`https://api.themoviedb.org/3/movie/${props.query.id}`} />
            </LazyLoad>
            <CastInfo />
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { query: context.query }, // will be passed to the page component as props
    }
}
