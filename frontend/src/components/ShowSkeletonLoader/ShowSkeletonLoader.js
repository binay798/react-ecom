import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

function ShowSkeletonLoader() {

    let showSkeleton = Array(6).fill().map((item,id) => {
        return (
            <div key = {id}>
                <Skeleton width="100%" height={200} animation="wave"  />
                <Skeleton width="50%" height={20} animation="wave" style={{marginBottom: "10px"}}/>
                <Skeleton width="70%" height={20} animation="wave" style={{marginBottom: "10px"}} />
                <Skeleton width="60%" height={20} animation="wave" />

            </div>
        )
    })
    return (
        <>
        {showSkeleton}
        </>
    )
}

export default ShowSkeletonLoader
