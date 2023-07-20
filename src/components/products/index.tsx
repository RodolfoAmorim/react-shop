import { Product } from '../product'
import { TitleSection } from '../titleSection'
import { ProductModel } from '../../models/productModel'
import ProductList from '../../services/productsList'

export function Products() {
  return (
    <section className='w-full px-6 py-10'>
      <TitleSection title='Our Products' />

      <div className='w-full my-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6 xl:gap-y-10 2xl:grid-cols-6'>
        {ProductList.products.map((product: ProductModel, index: number) => {
          return (
            <Product
              key={index}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          )
        })}
      </div>
    </section>
  )
}
