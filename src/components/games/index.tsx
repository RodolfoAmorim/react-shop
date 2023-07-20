import { Game } from '../game'
import { TitleSection } from '../titleSection'
import { GamesModel } from '../../models/gamesModel'
import GamesList from '../../services/gamesList'

export function Games() {
  return (
    <section className='w-full px-6 py-10'>
      <TitleSection title='Our Games' />

      <div className='w-full my-10 grid grid-cols-2 gap-4 md:grid-cols-4 xl:gap-x-6 xl:gap-y-10 2xl:grid-cols-6'>
        {GamesList.games.map((games: GamesModel, index: number) => {
          return (
            <Game
              key={index}
              image={games.image}
              title={games.title}
              category={games.category}
              price={games.price}
            />
          )
        })}
      </div>
    </section>
  )
}
