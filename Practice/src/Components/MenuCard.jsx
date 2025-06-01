import React from 'react'

const MenuCard = () => {

    const foodMenu = [
        {
            img: 'https://imgs.search.brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            Name: 'Butter Paneer',
            price: 500

        },
        {
            img: 'https://imgs.search.brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            // img: 'hthttps://imgs.search.brave.com/9IjdvCA0FsYEhT00A0Go8A36yTLsiPQBEaYeHw8jeEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jYXNoZXct/Y3VycnktaW5kaWFu/LWthanUtbWFzYWxh/LTI2MG53LTEyNTIz/Nzc3MzYuanBntps://imgs.search.brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            Name: 'Cashew Paneer',
            price: 600

        },
        {
            img: 'https://imgs.search.brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            // img: 'https://imgs.search.https://imgs.search.brave.com/okElu0WZL6RDAC2cBC_aWJ_4JB-iLMfzhxuET_QEZhs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NjkxMTkzNy9waG90/by9idXR0ZXItY2hp/Y2tlbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NF9mUlR5/eHdtNjR0YklxNWUz/eGxoUjlmZ1pIcFdt/TGRtNlZuam1SaUZo/VT0brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            Name: 'Butter Chicken',
            price: 800

        },
        {
            img: 'https://imgs.search.brave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            // img: 'https://imgs.search.https://imgs.search.brave.com/apWr7FKHmZfB89i_5gdaOGcE4m4yIX_54pjkUIXU71A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8zMTQ3NzM3/LzQ5NDcvaS80NTAv/ZGVwb3NpdHBob3Rv/c180OTQ3MTEzMy1z/dG9jay1waG90by1o/eWRlcmFiYWRpLWJp/cnlhbmktYS1wb3B1/bGFyLWNoaWNrZW4u/anBnbrave.com/hgY1Ab_wpAH4_2YBA4LbDdPHWwRNIhQ_1dmzdekJezg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcw/OTA2OTAzL3Bob3Rv/L3BhbmVlci1tYWto/YW5pLW9yLXNoYWhp/LXBhbmVlci1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dVVX/aWhKMjFXOTdISmxT/X3U3RmJ0cUhrR2xs/dmZVNUoxSWI0b3RD/UHZCST0',
            Name: 'Chicken Biryani',
            price: 1000

        }
    ];
    const menu = foodMenu.map((item, index) => (
        <li key={index} className='list'>
            <img src={item.img} alt={item.Name} width={150} />
            <h4>{item.Name}</h4>
            <p>Rs.{item.price}</p>
        </li>
    ))
    return (
        <div className='cards'>
            <h2>Food items</h2>
            <ul className='items'>{menu}</ul>
        </div>
    )
}

export default MenuCard