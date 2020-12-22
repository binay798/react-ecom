import { useState,useEffect } from 'react';
import { storage } from '../firebase'


const GetImgUrl = (img) => {
    const [imgUrl,setImgUrl] = useState(null)

    useEffect(() => {
        const storageRef = storage.ref('images')
        const uploadTask = storageRef.put(img);

        uploadTask.on('state_changed',null,err => {
            alert(err)
        },success => {
            storageRef.getDownloadURL()
                .then(url => {
                    console.log(url)
                    setImgUrl(url)
                })
                .catch(err => {
                    alert(err)
                })
        })
    },[img])
    

    return {imgUrl};
}

export default GetImgUrl