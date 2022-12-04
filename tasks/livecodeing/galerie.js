const app_state_data = {
    items: [
        {
            id: 1,
            title : 'Robbe',
            img : 'Bild einer Robbe',
            rating: {
                akless: 4,
                john: 4,
                jane: 5
            }
        },
        {
            id: 2,
            title: 'Igel',
            img: 'Bild eines Igels',
            rating: {
                akless: 3,
                john: 2,
                jane: 4
            }
        }
    ],

};
const $items = document.querySelector('#items');
app_state_data.items.forEach(item => {
   const $item = document.createElement('div');
   $item.innerHTML =`
   <h2>${item.title}</h2>
    <p>${item.img}</p>`;
    $items.appendChild($item);
});

//Object.values(Object) returns an array of the values

