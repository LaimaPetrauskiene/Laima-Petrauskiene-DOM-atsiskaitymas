class ApartmentCardComponent {

    static USD_EUR = 0.87;

    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        const { type, owner: { fullname, email, phone }, roomCount, squares, address: { city, country, street, number }, price, imgSrc } = this.props;
        const { amount, currency } = price;
    
        const finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
        const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';


        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "car p-3 shadow";
        this.htmlElement.innerHTML = `
        <div class="card">
        <img src="${imgSrc}"/>       
        <h2 class="text-danger">${type}</h2>
        <h4>${roomCount} rooms (${squares} sq.m.)</h4>
        <hr>
        <ul>
            <li>owner:<strong> ${fullname}</strong></li>
            <li>email:<strong> ${email}</strong></li>
            <li>phone:<strong> ${phone}</strong></li>
            <hr>
            <li>${street}-${number}, ${city}, ${country}</li>    
        </ul>
        <hr>
        <h2 class="text-success">${formatedPrice}</h2>
        
        </div>
        `
    }
}