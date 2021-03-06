const baseURL = "http://localhost:3000";

class API {
    static fetchApartments = (success, failure) => {

        fetch(`${baseURL}/apartment`)
            .then(res => res.json())
            .then(success)
            .catch(failure)

    }

    static deleteApartment = (id, success, failure) => {
        fetch(`${baseURL}/apartment/${id}`, { method: 'DELETE' })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure)
    }


}

// API.fetchApartments(
//    console.log,
//    console.error
// )

// API.deleteApartment(
//    "4",
//    () => console.log('Ištrinta sėkmingai'),
//    console.error
// )