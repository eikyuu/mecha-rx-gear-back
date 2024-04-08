import Gunpla from '#models/gunpla';
import Price from '#models/price';
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import axios from 'axios';
import * as cheerio from 'cheerio';


export default class WebScrapper extends BaseCommand {
  static commandName = 'web:scrapper'
  static description = 'Scraps the web for data and saves it to the database.'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    try {
      const gunplas: any[] = [];
      const response = await axios.get('https://riseofgunpla.com/categorie-produit/gunpla/high-grade-hg');
      const $ = cheerio.load(response.data);
      const grade = $('h1').text();

      $('li.product').each((_i, el) => {

        const title = $(el).find('h2').text();
        // const price = $(el).find('.price').text();
        const image = $(el).find('img').attr('src');

        gunplas.push({
          name: title,
          series: 'inconnu',
          image: image,
          description: 'This is a description',
          grade: grade,
          releaseDate: new Date(),
          size: '1/144',
          manufacturer: 'Bandai',
        });
      });

      for (const gunpla of gunplas) {
        // Create Gunpla entry
        const createdGunpla = await Gunpla.create(gunpla);
    
        // Create Price entry associated with the created Gunpla
        await Price.create({
            gunplaId: createdGunpla.id, // Use the id of the created Gunpla
            price: 100,
            priceCurrency: 'USD',
            retailerId: 1
        });
    }

      console.log('Products have been added to the database');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
}