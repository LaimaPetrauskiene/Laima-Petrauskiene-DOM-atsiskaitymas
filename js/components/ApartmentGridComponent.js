class ApartmentGridComponent {
    constructor() {
        this.state = {
            loading: false,
            apartments: []
        }
        this.init();
    }

    init = () => {
        this.state.loading = true;
        this.initFetch();
        this.htmlElement = document.createElement('div');

        this.render();
    }

    initFetch = () => {
        API.fetchApartments(
            (apartments) => {
                this.state.loading = false;
                this.saveApartments(apartments);
            },
            (err) => {
                alert(err);
                this.state.loading = false;
                this.render();
            }
        );
    }


    saveApartments = (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;
        this.htmlElement.className = 'row g-3'
        this.render();
    }

    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-xs-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;

    }


    render = () => {
        const { loading, apartments } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
        } else if (apartments.length > 0) {
            this.htmlElement.innerHTML = ``;
            const apartmentsElements = apartments
                .map(x => new ApartmentCardComponent(x))
                .map(x => x.htmlElement)
                .map(this.wrapInColumn);
            this.htmlElement.append(...apartmentsElements);
        } else {
            this.htmlElement.innerHTML = 'Šiuo metu būstų nėra';
        }
    }
}