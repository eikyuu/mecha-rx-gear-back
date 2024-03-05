import Gunpla from '#models/gunpla';
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
        const price = $(el).find('.price').text();
        const image = $(el).find('img').attr('src');

        gunplas.push({
          name: title,
          price: price,
          series: 'inconnu',
          image: image,
          description: 'This is a description',
          grade: grade,
        });
      });

      // Assuming Product is a model and create is the correct method to use
      for (const gunpla of gunplas) {
        await Gunpla.create(gunpla);
      }

      console.log('Products have been added to the database');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
}