import Alpine from 'alpinejs'

window.Alpine = Alpine



Alpine.data('projekt', () => ({
    message: 'Hello, Alpine.js!',
    menuOpen: false,
    apiUrlCat: 'https://api.thecatapi.com/v1/images/search',
    apiUrlDog: 'https://api.thedogapi.com/v1/images/search?limit=1',
    dogImage: null,
    catImage: null,
    
    init() {
       
    },

    async Print(text, type) {
        if (type === 'json') {
            const string = JSON.stringify(text, null, 2)
            console.log(`[ DEBUG ] : ${string}`)
        } else {
            console.log(`[ DEBUG ] : ${text}`)
        }
    },

    async getRandomDog() {
        try {
            const response = await fetch(this.apiUrlDog)
            const data = await response.json()

            this.Print(data, 'json')

            
            this.dogImage = data[0]



        } catch (error) {
            console.error('Error fetching dog:', error)
        }
    },


    async getRandomCat() {
        try {
            const response = await fetch(this.apiUrlCat)
            const data = await response.json()

            this.Print(data, 'json')

            
            this.catImage = data[0]

           


        } catch (error) {
            console.error('Error fetching dog:', error)
        }
    },


    async getAll() {
        await this.getRandomCat()
        await this.getRandomDog()
    },

    toggle() {
        this.menuOpen = !this.menuOpen
    }
}))

Alpine.start()
