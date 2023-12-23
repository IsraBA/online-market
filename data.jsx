const fruits = [
    {
        id: "a1",
        name: "Apple",
        color: "Red",
        emoji: "🍎",
        price: 1.99,
        image: "https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png"
    },
    {
        id: "a2",
        name: "Banana",
        color: "Yellow",
        emoji: "🍌",
        price: 0.99,
        image: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917"
    },
    {
        id: "a3",
        name: "Orange",
        color: "Orange",
        emoji: "🍊",
        price: 2.49,
        image: "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png"
    },
    {
        id: "a4",
        name: "Grapes",
        color: "Purple",
        emoji: "🍇",
        price: 3.99,
        image: "https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png"
    },
    {
        id: "a5",
        name: "Strawberry",
        color: "Red",
        emoji: "🍓",
        price: 2.79,
        image: "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png"
    },
    {
        id: "a7",
        name: "Watermelon",
        color: "Green",
        emoji: "🍉",
        price: 5.99,
        image: "https://pngfre.com/wp-content/uploads/watermelon-27-1024x987.png"
    },
    {
        id: "a8",
        name: "Pineapple",
        color: "Yellow",
        emoji: "🍍",
        price: 3.89,
        image: "https://www.vhv.rs/dpng/f/39-392139_fruit-pineapple-hd-png-download.png"
    },
    {
        id: "a9",
        name: "Mango",
        color: "Orange",
        emoji: "🥭",
        price: 2.99,
        image: "https://static.vecteezy.com/system/resources/previews/029/200/082/non_2x/mango-transparent-background-free-png.png"
    },
    {
        id: "a10",
        name: "Kiwi",
        color: "Brown",
        emoji: "🥝",
        price: 1.79,
        image: "https://static.vecteezy.com/system/resources/previews/008/530/509/original/kiwi-fruit-cutout-file-png.png"
    },
    {
        id: "a11",
        name: "Peach",
        color: "Orange",
        emoji: "🍑",
        price: 2.29,
        image: "https://pngfre.com/wp-content/uploads/peach-png-image-from-pngfre-33-1024x815.png"
    },
    {
        id: "a12",
        name: "Cherry",
        color: "Red",
        emoji: "🍒",
        price: 4.99,
        image: "https://parspng.com/wp-content/uploads/2023/01/cherrypng.parspng.com-5.png"
    },
    {
        id: "a13",
        name: "Pear",
        color: "Green",
        emoji: "🍐",
        price: 1.89,
        image: "https://static.vecteezy.com/system/resources/previews/029/335/116/original/pear-transparent-background-png.png"
    },
    {
        id: "a14",
        name: "Plum",
        color: "Purple",
        emoji: "🍑",
        price: 2.69,
        image: "https://pngimg.com/d/plum_PNG8673.png"
    },
    {
        id: "a15",
        name: "Raspberry",
        color: "Red",
        emoji: "🍇",
        price: 3.49,
        image: "https://static.vecteezy.com/system/resources/previews/022/825/587/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png"
    },
    {
        id: "a16",
        name: "Lemon",
        color: "Yellow",
        emoji: "🍋",
        price: 1.49,
        image: "https://pngimg.com/d/lemon_PNG25198.png"
    },
    {
        id: "a17",
        name: "Cranberry",
        color: "Red",
        emoji: "🍒",
        price: 3.79,
        image: "https://static.vecteezy.com/system/resources/previews/027/144/570/original/fresh-cranberry-isolated-on-transparent-background-png.png"
    },
    {
        id: "a18",
        name: "Apricot",
        color: "Orange",
        emoji: "🍑",
        price: 2.19,
        image: "https://static.vecteezy.com/system/resources/previews/015/100/094/non_2x/apricots-transparent-background-free-png.png"
    },
    {
        id: "a19",
        name: "Avocado",
        color: "Green",
        emoji: "🥑",
        price: 4.99,
        image: "https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png"
    },
    {
        id: "a20",
        name: "Coconut",
        color: "Brown",
        emoji: "🥥",
        price: 5.49,
        image: "https://pngimg.com/d/coconut_PNG108885.png"
    }
]

const vegetables = [
    { id: "21", name: 'Carrot', color: 'Orange', emoji: '🥕', price: 1.49, image: 'https://purepng.com/public/uploads/large/purepng.com-carrotcarrotdomestic-carrotfast-growingcarrots-1701527243731np6ec.png' },
    { id: "22", name: 'Broccoli', color: 'Green', emoji: '🥦', price: 2.29, image: 'https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png' },
    { id: "23", name: 'Bell Pepper', color: 'Red', emoji: '🫑', price: 1.99, image: 'https://purepng.com/public/uploads/large/purepng.com-bell-peppervegetables-chilli-bell-pepper-pepper-capsicum-sweet-pepper-chili-941524726191g7h58.png' },
    { id: "24", name: 'Spinach', color: 'Green', emoji: '🍃', price: 1.79, image: 'https://static.vecteezy.com/system/resources/previews/029/719/645/original/spinach-transparent-background-png.png' },
    { id: "25", name: 'Tomato', color: 'Red', emoji: '🍅', price: 2.49, image: 'https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png' },
    { id: "26", name: 'Cucumber', color: 'Green', emoji: '🥒', price: 1.29, image: 'https://pngimg.com/d/cucumber_PNG12602.png' },
    { id: "27", name: 'Eggplant', color: 'Purple', emoji: '🍆', price: 2.99, image: 'https://freepngimg.com/save/13073-aubergine-png-file/490x490' },
    { id: "28", name: 'Zucchini', color: 'Green', emoji: '🥬', price: 1.69, image: 'https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/ZUcchini-hero@2x.png' },
    { id: "29", name: 'Onion', color: 'Brown', emoji: '🧅', price: 0.99, image: 'https://freepngimg.com/thumb/onion/145973-brown-onion-png-image-high-quality.png' },
    { id: "210", name: 'Potato', color: 'Brown', emoji: '🥔', price: 1.19, image: 'https://freepngimg.com/thumb/potato/8-2-potato-png-pic.png' },
    { id: "211", name: 'Cauliflower', color: 'White', emoji: '🥦', price: 2.79, image: 'https://static.vecteezy.com/system/resources/previews/027/215/729/original/cauliflower-cauliflower-transparent-background-ai-generated-free-png.png' },
    { id: "212", name: 'Lettuce', color: 'Green', emoji: '🥬', price: 1.59, image: 'https://i.pinimg.com/originals/60/16/91/6016911336b4930bb9eda15b99ffad36.png' },
    { id: "213", name: 'Radish', color: 'Red', emoji: '🫒', price: 1.39, image: 'https://static.vecteezy.com/system/resources/previews/029/721/408/original/radish-transparent-background-png.png' },
    { id: "214", name: 'Asparagus', color: 'Green', emoji: '🍆', price: 3.49, image: 'https://pngimg.com/d/asparagus_PNG4.png' },
    { id: "215", name: 'Sweet Potato', color: 'Orange', emoji: '🍠', price: 2.09, image: 'https://static.vecteezy.com/system/resources/previews/029/712/252/original/sweet-potato-transparent-background-png.png' },
];

const dairy = [
    { id: "31", name: 'Milk', category: 'Liquid', emoji: '🥛', price: 2.99, image: 'https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png' },
    { id: "32", name: 'Cheese', category: 'Solid', emoji: '🧀', price: 4.49, image: 'https://purepng.com/public/uploads/large/purepng.com-cheese-piecefood-organic-cheese-piece-block-dairy-9415246351700skq0.png' },
    { id: "33", name: 'Butter', category: 'Solid', emoji: '🧈', price: 3.99, image: 'https://purepng.com/public/uploads/large/purepng.com-butterfood-dairy-milk-butter-buttermilk-cream-butterfat-941524621398zsmge.png' },
    { id: "34", name: 'Yogurt', category: 'Semi-solid', emoji: '🍦', price: 1.79, image: 'https://www.karouncheese.com/images/products/1045_tn800_12064.png' },
    { id: "35", name: 'Cream', category: 'Liquid', emoji: '🍶', price: 2.29, image: 'https://png.pngtree.com/png-clipart/20230501/original/pngtree-skin-care-transparent-face-cream-png-image_9129633.png' },
    { id: "36", name: 'Eggs', category: 'Solid', emoji: '🥚', price: 2.99, image: 'https://clipart-library.com/new_gallery/243-2435580_dozen-eggs-png-dozen-of-eggs-png.png' },
    { id: "37", name: 'Sour Cream', category: 'Semi-solid', emoji: '🍶', price: 1.99, image: 'https://www.gaylea.com/wp-content/uploads/2017/10/GayLea_Sour-Cream_500mL_Original_ENG_600x600.png' },
    { id: "38", name: 'Cottage Cheese', category: 'Solid', emoji: '🧀', price: 3.49, image: 'https://pngimg.com/d/cottage_cheese_PNG1.png' },
];

const alcohol = [
    { id: "41", name: 'Red Wine', category: 'Wine', emoji: '🍷', price: 12.99, image: 'https://purepng.com/public/uploads/large/purepng.com-red-wine-bottlebottlenarrowerjarexternalinnersealredwine-1421526457738mz10f.png' },
    { id: "42", name: 'Whiskey', category: 'Spirits', emoji: '🥃', price: 25.99, image: 'https://pngimg.com/d/whisky_PNG21.png' },
    { id: "43", name: 'Vodka', category: 'Spirits', emoji: '🍸', price: 18.99, image: 'https://pngimg.com/d/vodka_PNG98929.png' },
    { id: "44", name: 'Beer', category: 'Beer', emoji: '🍺', price: 5.99, image: 'https://pngimg.com/d/bottle_PNG2096.png' },
    { id: "45", name: 'Champagne', category: 'Sparkling Wine', emoji: '🍾', price: 29.99, image: 'https://pngimg.com/d/champagne_PNG17476.png' },
    { id: "46", name: 'Tequila', category: 'Spirits', emoji: '🥳', price: 22.99, image: 'https://pngimg.com/d/tequila_PNG53.png' },
    { id: "47", name: 'Gin', category: 'Spirits', emoji: '🍸', price: 20.99, image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Hendrick%27s_Gin_-_Bottle.png' },
    { id: "48", name: 'Rum', category: 'Spirits', emoji: '🥃', price: 15.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Appleton_Estate_V-X_bottle.png/1200px-Appleton_Estate_V-X_bottle.png' },
];

export default { fruits, vegetables, alcohol, dairy }