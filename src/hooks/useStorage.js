import { useState, useEffect } from "react"

import { storageService, firestoreService, timestamp } from '../firebase/config'

const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // References
        const storageRef = storageService.ref(file.name)
        const collectionRef = firestoreService.collection("Images")

        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })

    }, [file])

    return { progress, error, url }

}

export default useStorage