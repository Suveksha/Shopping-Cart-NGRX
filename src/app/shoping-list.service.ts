import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

  constructor() { }

  shoppingList=[
    {
      id:'1',
      title:'Sherlock Holmes',
      description:'A book about the various adventures of detective Sherlock Holmes alongwith his partner Dr.Watson.',
      price:"250",
      itemUrl:"https://harpercollins.co.in/PowerPoint_jpg/9789353575922.jpg"
    },
    {
      id:2,
      title:"Pride and Prejudice",
      description:"Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
      price:"300",
      itemUrl:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_hr.jpg"
    },
    {
      id:3,
      title:"Imortals of Meluha",
      description:"The Immortals of Meluha is the first book of Amish Tripathi, first book of Amishverse, and also the first book of Shiva Trilogy. The story is set in the land of Meluha and starts with the arrival of the Shiva.",
      price:"300",
      itemUrl:'https://d1af37c1pl2nfl.cloudfront.net/images/books/kbs/front/the-immortals-of-meluha.jpg'
    },
    {
      id:4,
      title:"Six of Crows",
      description:"Ketterdam: a bustling hub of international trade where anything can be had for the right price–and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams.",
      price:"450",
      itemUrl:'https://images-na.ssl-images-amazon.com/images/I/71pX+JTU8EL.jpg'
    },
    {
      id:5,
      title:"Think and Grow Rich",
      description:"Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. ",
      price:"200",
      itemUrl:'https://images-na.ssl-images-amazon.com/images/I/51mlyN35U9L._SX292_BO1,204,203,200_.jpg'
    },
  ]
}
