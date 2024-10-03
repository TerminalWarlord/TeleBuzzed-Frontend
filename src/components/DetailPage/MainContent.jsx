import About from './About'
import NewReview from './NewReview'

const MainContent = ({ isFetching = false, error = null, data }) => {
    return (
        <>
            <About description={data?.result?.description} isFetching={isFetching} error={error} />
            {!isFetching && <NewReview />}
        </>
    )
}

export default MainContent