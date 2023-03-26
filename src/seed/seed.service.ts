import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  
  
  constructor(
    // private readonly pokemonService:PokemonService,
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}


  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    // method 2
    const pokemonToInsert = [];
    // const insertPromisesArray = [];
    data.results.forEach(({name, url}) => {
      const segment = url.split('/');
      const no:number = +segment[segment.length - 2];
      // // method 1
      // await this.pokemonService.create({ name, no });
      
      // // method 2
      // insertPromisesArray.push(
      //   this.pokemonModel.create({name, no})
      // );

      //method 3
      pokemonToInsert.push({name, no});
    })

    // // method 2
    // await Promise.all(insertPromisesArray);

    // //method 3
    await this.pokemonModel.insertMany(pokemonToInsert)

    return data.results;
  }
}
