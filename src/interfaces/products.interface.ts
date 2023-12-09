
export interface Product {
    title: String,
    price: number,
    description: string,
    category: Category,
    image: string,
    amount: number
}

export interface Category {
    name: string,
    color: string
}