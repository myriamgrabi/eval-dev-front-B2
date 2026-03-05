// fonction asyncrone pour charger un acteur
async function fetchActor(id, selector = "#actors") {

    try {

        const res = await fetch("https://api.tvmaze.com/people/" + id)

        //si on a une reponse dans ces cas la
        if (res.ok) {

            //on la debug dans la console
            console.log("acteur trouvé")

            //on sort les données lorsqu'elles sont dispo
            //on creer une variable qui contiendra les données dès que possible au format json
            let data = await res.json()

            console.log(data)

            const art = document.createElement("article")

            //on place le titre dans l'article
            const title = document.createElement("h2")
            title.innerHTML = data.name
            art.appendChild(title)

            //afficher image
            const fig = document.createElement("figure")
            const img = document.createElement("img")

            if (data.image == null) {

                img.setAttribute(
                    "src",
                    "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                )

                img.setAttribute("alt", "Aucune image")
                //fin test

            } else {

                img.setAttribute("src", data.image.medium)
                img.setAttribute("alt", "Photo de " + data.name)

            }

            fig.appendChild(img)
            art.appendChild(fig)

            // on clic sur acteur afficher sa filmographie
            art.addEventListener("click", function () {
                fetchFilmography(id)
            })

            document.querySelector(selector).appendChild(art)

        } else {

            console.log("acteur non trouvé")

        }

    } catch (error) {

        console.log("aucun résultar")

    }
}


// fonction pour afficher la filmographie
async function fetchFilmography(id, selector = "#filmography") {

    try {

        //accès a la filmographie
        const res = await fetch(
            "https://api.tvmaze.com/people/" + id + "/castcredits?embed=show"
        )

        if (res.ok) {

            let data = await res.json()

            console.log(data)

            // supprimer les autres acteurs
            document.querySelector("#actors").innerHTML = ""

            const title = document.createElement("h2")
            title.innerHTML = "Filmographie"
            document.querySelector(selector).appendChild(title)

            data.forEach(item => {

                const show = item._embedded.show

                const p = document.createElement("p")
                p.innerHTML = show.name

                document.querySelector(selector).appendChild(p)

            })

        }

    } catch (error) {

        console.log("erreur récupération filmographie")

    }
}


// fonction pour générer un acteur aléatoire
function randomActor() {
    return Math.floor(Math.random() * 800) + 1
}


// charger 3 acteurs aléatoires
fetchActor(randomActor())
fetchActor(randomActor())
fetchActor(randomActor())


// lien pour recharger
document.querySelector("#reload").addEventListener("click", function () {

    location.reload()

})