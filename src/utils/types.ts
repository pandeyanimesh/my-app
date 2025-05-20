// export type ProductCardProps = {
//     title: string;
//     price: number;
//     rating: number;
//     discountPercentage?: number;
//     image: string;
// };

export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    discountPercentage?: number;
    images: string[]; 
    count: number;
};

// export interface ProductList{ 
// }


export interface Cart {
    id: number;
    count: number; 
}

export interface CartProp{
    products: Cart[];
}