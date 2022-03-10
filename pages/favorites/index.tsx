import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

 const  FavoritesPage  = () => {

  const [favoritePokemons, SetfavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    SetfavoritePokemon(localFavorites.pokemons)
    }, [])
  
  return (
       <Layout title='Pokémons - Favoritos'>
        
        {
          favoritePokemons.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritePokemons} /> )
              }
      
      </Layout>
  )
};
export default  FavoritesPage ;