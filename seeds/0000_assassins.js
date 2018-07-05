//seed for assassins
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function() {
      // Inserts seed entries
      return knex('assassins').insert([{
          photo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Edward_Fox_%28The_Day_of_the_Jackal%2C_1973%2C_trailer_screenshot%29_01.jpg?1530818013684',
          fullnames: 'Alexander Duggan',
          codenames: 'The Jackal',
          weapon: 'Sniper rifle',
          contact: 'jackal@gmail.com',
          age: 31,
          price: 45,
          rating: 7.5,
          kills: 28
        },
        {
          photo: 'http://www.gablescinema.com/media/filmassets/slides/No_Country_for_Old_Men_5.png',
          fullnames: 'Anton Chigurh',
          codenames: 'Old Man',
          weapon: 'Pneumatic Bolt Gun',
          contact: 'pneujackcity@gmial.com',
          age: 52,
          price: 40,
          rating: 9,
          kills: 72
        },
        {
          photo: 'https://cdn-images-1.medium.com/max/2000/1*KrmY6jZ6yD4BnwK3sdF74Q.png',
          fullnames: null,
          codenames: 'Ghost Dog',
          weapon: 'Pistol',
          contact: 'ghostdog@gmail.com',
          age: 28,
          price: 20,
          rating: 6.5,
          kills: 35
        },
        {
          photo: 'http://entertainment.inquirer.net/wp-content/blogs.dir/6/files/2016/08/jason-bourne3.jpg',
          fullnames: 'Jason Bourne',
          codenames: null,
          weapon: 'Parkour',
          contact: 'jb@gmail.com',
          age: 27,
          price: 25,
          rating: 7,
          kills: 48
        },
        {
          photo: 'https://icdn4.digitaltrends.com/image/shows-to-stream-john-wick-2-720x720.jpg',
          fullnames: 'John Wick',
          codenames: 'Baba Yaga',
          weapon: 'Lots of guns',
          contact: 'babayaga@gmail.com',
          age: 35,
          price: 50,
          rating: 9.5,
          kills: 433
        },
        {
          photo: 'https://steamuserimages-a.akamaihd.net/ugc/496890114314117901/A63F061337B40CF5D7B765771BBD23D53D0197A3/',
          fullnames: 'Jules Winnfield',
          codenames: null,
          weapon: 'Pistol',
          contact: 'bmf@gmail.com',
          age: 26,
          price: 15,
          rating: 6.5,
          kills: 13
        },
        {
          photo: 'https://cdna.artstation.com/p/assets/images/images/000/096/414/large/vladimir-andreevsky-leon-the-professional.jpg?1402257393',
          fullnames: 'Leon',
          codenames: 'The Professional',
          weapon: 'Everything',
          contact: 'leon@gmail.com',
          age: 41,
          price: 30,
          rating: 8.5,
          kills: 87
        },
        {
          photo: 'https://vignette.wikia.nocookie.net/nikita2010/images/c/cb/Nikita-S3.jpg/revision/latest?cb=20130706080202',
          fullnames: 'Nikita Mears',
          codenames: 'La Femme Nikita',
          weapon: 'Silenced Pistols',
          contact: 'nikita@gmail.com',
          age: 28,
          price: 30,
          rating: 7,
          kills: 32
        },
        {
          photo: 'https://cdn.shopify.com/s/files/1/1222/3190/products/i_am_pickle_rick_tshirt_from_rick_and_morty_tv_show_in_India_by_silly_punter.jpg?v=1503811099',
          fullnames: 'Pickle Rick',
          codenames: 'Solenya',
          weapon: 'Lasers and Office Supplies',
          contact: 'rsanchez@gmail.com',
          age: 60,
          price: 0,
          rating: 8,
          kills: 24
        }
      ]);
    });
};
