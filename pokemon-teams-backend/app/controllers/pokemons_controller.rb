class PokemonsController < ApplicationController
  def index
    pokemons = Pokemon.all
    render json: pokemons
  end

  def show
    pokemon = Pokemon.find(params[:id])
    render json: pokemon
  end

  # def new
  # end

  def create
    trainer = Trainer.find(params[:trainer_id])
    #byebug
    if trainer.pokemons.length < 6

      name = Faker::Name.first_name
      species = Faker::Games::Pokemon.name
      pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:trainer_id])
      render json: pokemon
    else
      alert "Pokemon team full"
    end
  end

  def destroy

    pokemon = Pokemon.find(params[:id])
    spare = pokemon
    pokemon.delete

    render json: spare
  end
end
