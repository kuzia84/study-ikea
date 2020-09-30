const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];
const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd045',
        count: 1
    },
    {
        id: 'idd095',
        count: 2
    }
];
export const loadData = () => {
    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];
    }
    if (location.hash) {

    }
    if (location.pathname.includes('cart')) {

    }
};