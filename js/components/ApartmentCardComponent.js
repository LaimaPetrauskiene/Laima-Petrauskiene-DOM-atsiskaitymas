class ApartmentCardComponent {

    static USD_EUR = 0.87;

    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        const { type, owner: { fullname, email, phone }, roomCount, squares, address: { city, country, street, number }, price, imgSrc, onDelete } = this.props;
        const { amount, currency } = price;
    
        const finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
        const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';


        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "card p-3 shadow";
        this.htmlElement.innerHTML = `
        
        <img src="${imgSrc}"/>       
        <h2 class="text-warning text-center">${type}</h2>
        <hr>
        <h3>${roomCount} rooms (${squares} sq.m.)</h3>
        
        <ul>
            <li>owner:<strong> ${fullname}</strong></li>
            <li>email:<strong> ${email}</strong></li>
            <li>phone:<strong> ${phone}</strong></li>
            <hr>
            <li>${street}-${number}, ${city}, ${country}</li>    
        </ul>
       
        <h3 class="text-success">price: ${formatedPrice}</h3>
        
        

        <div class="text-center">
        <button class="btn btn-danger">Ištrinti</button>
        </div>`;
        const btn = this.htmlElement.querySelector('.btn');
        btn.addEventListener('click', onDelete);
    }


}