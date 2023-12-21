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
    { id: "21", name: 'Carrot', color: 'Orange', emoji: '🥕', price: 1.49 },
    { id: "22", name: 'Broccoli', color: 'Green', emoji: '🥦', price: 2.29 },
    { id: "23", name: 'Bell Pepper', color: 'Red', emoji: '🫑', price: 1.99 },
    { id: "24", name: 'Spinach', color: 'Green', emoji: '🍃', price: 1.79 },
    { id: "25", name: 'Tomato', color: 'Red', emoji: '🍅', price: 2.49 },
    { id: "26", name: 'Cucumber', color: 'Green', emoji: '🥒', price: 1.29 },
    { id: "27", name: 'Eggplant', color: 'Purple', emoji: '🍆', price: 2.99 },
    { id: "28", name: 'Zucchini', color: 'Green', emoji: '🥬', price: 1.69 },
    { id: "29", name: 'Onion', color: 'Brown', emoji: '🧅', price: 0.99 },
    { id: "210", name: 'Potato', color: 'Brown', emoji: '🥔', price: 1.19 },
    { id: "211", name: 'Cauliflower', color: 'White', emoji: '🥦', price: 2.79 },
    { id: "212", name: 'Lettuce', color: 'Green', emoji: '🥬', price: 1.59 },
    { id: "213", name: 'Radish', color: 'Red', emoji: '🫒', price: 1.39 },
    { id: "214", name: 'Asparagus', color: 'Green', emoji: '🍆', price: 3.49 },
    { id: "215", name: 'Sweet Potato', color: 'Orange', emoji: '🍠', price: 2.09 },
];

const dairy = [
    { id: "31", name: 'Milk', category: 'Liquid', emoji: '🥛', price: 2.99 },
    { id: "32", name: 'Cheese', category: 'Solid', emoji: '🧀', price: 4.49 },
    { id: "33", name: 'Butter', category: 'Solid', emoji: '🧈', price: 3.99 },
    { id: "34", name: 'Yogurt', category: 'Semi-solid', emoji: '🍦', price: 1.79 },
    { id: "35", name: 'Cream', category: 'Liquid', emoji: '🍶', price: 2.29 },
    { id: "36", name: 'Eggs', category: 'Solid', emoji: '🥚', price: 2.99 },
    { id: "37", name: 'Sour Cream', category: 'Semi-solid', emoji: '🍶', price: 1.99 },
    { id: "38", name: 'Cottage Cheese', category: 'Solid', emoji: '🧀', price: 3.49 },
];

const alcohol = [
    { id: "41", name: 'Red Wine', category: 'Wine', emoji: '🍷', price: 12.99 },
    { id: "42", name: 'Whiskey', category: 'Spirits', emoji: '🥃', price: 25.99 },
    { id: "43", name: 'Vodka', category: 'Spirits', emoji: '🍸', price: 18.99 },
    { id: "44", name: 'Beer', category: 'Beer', emoji: '🍺', price: 5.99 },
    { id: "45", name: 'Champagne', category: 'Sparkling Wine', emoji: '🍾', price: 29.99 },
    { id: "46", name: 'Tequila', category: 'Spirits', emoji: '🥳', price: 22.99 },
    { id: "47", name: 'Gin', category: 'Spirits', emoji: '🍸', price: 20.99 },
    { id: "48", name: 'Rum', category: 'Spirits', emoji: '🥃', price: 15.99 },
];

export default { fruits, vegetables, alcohol, dairy }