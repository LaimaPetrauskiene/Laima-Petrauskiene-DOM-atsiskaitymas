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

        this.render();
    }

    render = () => {
        const { loading } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = `Siunčiama`;
        } else {
            this.htmlElement.innerHTML = `Parsiųsta!`;
        }
    }
}