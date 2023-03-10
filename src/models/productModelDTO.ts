interface ProductDetail{
    id: number,
    title:string,
    description: string,
    price: number,
    discountPercentage:number,
    rating: number,
    stock:number,
    brand:string,
    category: string,
    thumbnail: string,
    images: string[]
  
}

export interface ProductList{
    products:ProductDetail[],
    total:string,
    skip:string,
    limit:string
}