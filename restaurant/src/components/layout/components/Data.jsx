const menu = [
    {
        id:1,
        title:'dosa',
        category:'Breakfast',
        price:20,
        img:'./images/item-1.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    {
        id:2,
        title:'milkshake',
        category:'Shakes',
        price:25,
        img:'./images/item-4.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    {
        id:3,
        title:'chapathi',
        category:'Dinner',
        price:30,
        img:'./images/item-3.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    {
        id:4,
        title:'meals',
        category:'Lunch',
        price:40,
        img:'./images/item-2.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    {
        id:5,
        title:'pulav',
        category:'Lunch',
        price:60,
        img:'./images/item-5.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    {
        id:6,
        title:'idli',
        category:'Breakfast',
        price:45,
        img:'./images/item-7.jpg',
        desc:'ljkdhdbkjdk.jbdlbdshlorem',
    },
    ];
    
    const temp = [
        {
            id:1,
            title:'Lime Juice',
            category:'Juices',
            price:26,
            img:'https://th.bing.com/th/id/OIP.Zs-1dliYvhGXyidfHBbe2AHaHa?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:2,
            title:'Cold Coffee',
            category:'Juices',
            price:42,
            img:'https://2.bp.blogspot.com/-XjdTvIPgNlc/ThYLjZIL4BI/AAAAAAAAEXQ/lSDtZAeTvAw/s1600/coffee6.JPG',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:3,
            title:'Water Melon',
            category:'Juices',
            price:47,
            img:'https://th.bing.com/th/id/R.ca87609bff301698547c8d2a06265672?rik=BDWLZmqwQ%2feYBA&riu=http%3a%2f%2fblog.cuteheads.com%2fwp-content%2fuploads%2f2016%2f06%2fwatermelon-juice-with-a-twist-summer-drinks-e1466635835917.jpg&ehk=yhVAswj8BZ4kOQTZuMwW77fnvzyZMjSwODLMvBUtEok%3d&risl=&pid=ImgRaw&r=0',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:4,
            title:'Pineapple',
            category:'Juices',
            price:47,
            img:'https://i1.wp.com/www.naturalfoodseries.com/wp-content/uploads/2017/12/Pineapple-Juice.jpg?fit=1000%2C667&ssl=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:5,
            title:'Musumbi',
            category:'Juices',
            price:47,
            img:'https://cdn2.stylecraze.com/wp-content/uploads/2013/08/19-Best-Benefits-Of-Mosambi-Juice-For-Skin-Hair-And-Health-1.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:6,
            title:'Orange',
            category:'Juices',
            price:47,
            img:'https://th.bing.com/th/id/OIP.U1lmrpOGhOnVP_zpyprrPgAAAA?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:7,
            title:'Fruit Punch',
            category:'Juices',
            price:60,
            img:'https://thebusybaker.ca/wp-content/uploads/2020/03/party-punch-fb-ig-4-scaled.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:8,
            title:'Oreo',
            category:'Milkshake',
            price:53,
            img:'https://www.getarecipes.com/wp-content/uploads/2021/06/GAR_featuredOreo-Milkshake.png',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:9,
            title:'Chocolate',
            category:'Milkshake',
            price:53,
            img:'https://th.bing.com/th/id/OIP.NNayoWDos5H4gpArTagIDQHaJQ?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:10,
            title:'Chikku',
            category:'Milkshake',
            price:53,
            img:'https://recipes.timesofindia.com/photo/53808733.cms',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:11,
            title:'Mush Melon',
            category:'Milkshake',
            price:53,
            img:'https://getamazedwithtaste.com/wp-content/uploads/2022/04/IMG_3299-500x500.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:12,
            title:'Pista',
            category:'Milkshake',
            price:53,
            img:'https://th.bing.com/th/id/OIP.OQqhVYSQx8RlalGVo5KoNgAAAA?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:13,
            title:'Strawberry',
            category:'Milkshake',
            price:53,
            img:'https://th.bing.com/th/id/OIP.IfHiGIWR_yskR_hy7EqSZQHaH4?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:14,
            title:'Mango',
            category:'Milkshake',
            price:53,
            img:'https://images.wisegeek.com/mango-smoothie-and-piece-of-mango.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:15,
            title:'Vanilla',
            category:'Milkshake',
            price:53,
            img:'https://th.bing.com/th/id/OIP.ffoboLbNyhk89SlCYPADPQHaHa?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:16,
            title:'Vanilla Sunday',
            category:'Ice Cream',
            price:55,
            img:'https://th.bing.com/th/id/OIP.k0RWQoSWHh-nyTSidxLq2QHaHa?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:17,
            title:'Fruit Salad',
            category:'Ice Cream',
            price:55,
            img:'https://th.bing.com/th/id/OIP.U8P7pP4nXQSwSWa25UAfkQHaLG?pid=ImgDet&rs=1',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:18,
            title:'Chocolate Sunday',
            category:'Ice Cream',
            price:60,
            img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/10/1/WU1407H_mexican-chocolate-sundae_s4x3.jpg.rend.hgtvcom.826.620.suffix/1473869103912.jpeg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:19,
            title:'Mix Sunday',
            category:'Ice Cream',
            price:60,
            img:'https://blog.cuteheads.com/wp-content/uploads/2016/08/4-ultimate-ice-cream-sundae-petite-sweets-new-ice-cream-flavors-e1470427488240.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:20,
            title:'Fruit Salad with Ice Cream',
            category:'Ice Cream',
            price:65,
            img:'https://recipes.timesofindia.com/thumb/60019725.cms?imgsize=287198&width=800&height=800',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:21,
            title:'Gudbud',
            category:'Ice Cream',
            price:75,
            img:'https://imgmedia.lbb.in/media/2021/06/60b65e5498ebae15f0a7704e_1622564436295.jpg',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:22,
            title:'dosa',
            category:'Breakfast',
            price:20,
            img:'./images/item-1.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
        {
            id:23,
            title:'milkshake',
            category:'Shakes',
            price:25,
            img:'./images/item-4.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
        {
            id:24,
            title:'chapathi',
            category:'Dinner',
            price:30,
            img:'./images/item-3.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
        {
            id:25,
            title:'meals',
            category:'Lunch',
            price:40,
            img:'./images/item-2.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
        {
            id:26,
            title:'pulav',
            category:'Lunch',
            price:60,
            img:'./images/item-5.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
        {
            id:27,
            title:'idli',
            category:'Breakfast',
            price:45,
            img:'./images/item-7.jpg',
            desc:'ljkdhdbkjdk.jbdlbdshlorem',
        },
    ]

function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying it directly
    const shuffledArray = [...array];
      
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const randomIndex = Math.floor(Math.random() * (i + 1));
      
        // Swap elements at randomIndex and i
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
      
    return shuffledArray;
}
      
const shuffledTemp = shuffleArray(temp);
      
export default shuffledTemp;
      

// export default temp;