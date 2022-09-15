interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ...
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

/* 
    Product 타입에서 유니온 으로 'id' | 'name' | 'price' 만 가져오고 싶어 라는 구문이다.
    Pick 이라는 유틸리티 타입으로 부분집합 요소만 가져왔다 라고 할 수 있는것이다.
*/

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

/*  // # 1
    interface UserProfileUpdate {
        username?: UserProfile['username'];
        email?: UserProfile['email'];
        profilePhotoUrl?: UserProfile['profilePhotoUrl'];
    }
*/

/* // #2
[#1] 코드를 mapped Type 으로 변환
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotopUrl']?: UserProfile[p]
}
*/

/* // #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}
*/

// #4 Partial 의 최종 구현체
type Subset<T> = {
    [p in keyof T]?: T[p]
}