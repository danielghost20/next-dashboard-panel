import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";




export async function postImages (image: File, setValue: Function) {
    try {
        const fileRef = ref(storage, `products/${image.name}`)
        uploadBytes(fileRef, image)
        .then(data => {
            getDownloadURL(data.ref)
            .then(url => {
                console.log(url)
                setValue(url)
            })
        })
        return {
            status: 202
        }
    } catch (error) {
        throw new Error('algo salio mal')
    }
}