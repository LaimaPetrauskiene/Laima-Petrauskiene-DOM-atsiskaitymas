class ApartmentsCardComponent {
    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "car p-3 shadow";
        this.htmlElement.innerHTML = `<h2 class="h5">KORTELE</h2>`
    }
}