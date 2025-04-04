import { pokemonApi } from "./pokeApi";

interface GetPokemonParams {
  name: string;
}

export const getPokemonByNameEndpoint = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: ({ name }: GetPokemonParams) => {
        return {
          url: `/cards?q=!name:${name}&pageSize=1`,
          method: 'GET',
        }
      },
      providesTags: (res, err, { name }) => [{ type: 'pokemon', id: name }]
    }),
  })
});

export const { useGetPokemonQuery } = getPokemonByNameEndpoint;
