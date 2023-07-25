import { CategoryFeatured } from '../categoryFeatured'
import { CategoriesModel } from '../../models/categoriesModel'
import CategoriesList from '../../services/categoriesList'

export function Categories() {
  return (
    <section className='w-full px-6 py-6 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6 2xl:gap-10'>
      {CategoriesList.categories.map(
        (category: CategoriesModel, index: number) => {
          return (
            <>
              <CategoryFeatured
                key={index}
                description={category.description}
                name={category.name}
                image={category.image}
                price={category.basePrice}
                type={category.type}
              />
            </>
          )
        }
      )}
    </section>
  )
}
