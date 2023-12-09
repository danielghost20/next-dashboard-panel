import { Product } from "@/interfaces/products.interface";
import { db } from "../../firebase";
import {addDoc, collection, doc, setDoc } from "firebase/firestore";

export async function postProducts (prod: Product) {
    try {
        await addDoc(collection(db, 'products'), prod)
        return {
            status: 201
        }
    } catch (error) {
        console.log(error)
        throw new Error('algo salio mal :/ ')
    }
}