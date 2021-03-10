const menuArray = [
    {
      available: true,
      type: "hotBev",
      title: 'Cafe Mocha',
      priceSmall: 3,
      priceMedium: 4.25,
      priceLarge: 5,
      description:
        'This is our premium 2 shot espresso, frothy milk cocoa, served up with whip cream and cocoa on top!',
    },
    {
        available: true,
        type: "hotBev",
        title: "Cinamoon Doce Latte",
        priceSmall: 3.00,
        priceMedium: 4.25,
        priceLarge: 5.00,
        description:
          'This is our zesty 2 shot espresso, frothy milk cinammon drink, served up with whip cream and coconut milk!', 
      },
      {
        available: true,
        type: "coldBev",
        title: "Strawberry Smoothie",
        priceSmall: 3.50,
        priceMedium: 5.00,
        priceLarge: 6.00,
        description:
          'Made with real frozen bananas, strawberries, and yogurt, on a base of Apple Juice, this tangy smoothie is sure to delight!',  
      },
      {
        available: true,
        type: "coldBev",
        title: "Iced Thai Coffee",
        priceSmall: 3.50,
        priceMedium: 4.50,
        priceLarge: 5.00,
        description:
          'The sugary delicous taste of coffee and a sweet mixture of Thai spice, cream and sugar, served chilled!',
      },
      {
        available: true,
        type: "food",
        title: "Cubean Burrito",
        priceOne: 7.75,
        description:
          'Cuban style large burrito with beans and chicken, served with lettuce, tomato, salsa, onions, and sour cream, with a side of plantain.',
      },
      {
        available: true,
        type: "food",
        title: "Grilled Tuna Melt",
        priceOne: 7.75,
        description:
          'Exquisite sour doe bread tasted with cheese and tuna salad and served with a side of Chips and Salsa and fruit cup.',
      },
      {
        available: true,
        type: "food",
        title: "Chile and Grilled Cheese",
        priceOne: 7.75,
        description:
          'This crowd favorite has a cup of our signature tex mex style chile and a grilled cheese that blends three cheeses. Can sub vegan chile if you would like.',
      },
      {
        available: true,
        type: "food",
        title: "Vegan Chile",
        priceOne: 7.75,
        description:
          'A bowl of our vegan chile, made fresh everyday!',
      },
  ];
  
  export default menuArray;