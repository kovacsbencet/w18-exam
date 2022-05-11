import {createServer} from 'miragejs'


function mockServer() {

    let server = createServer(
        {
            routes(){
                this.urlPrefix = "https://demoapi.com";
                this.namespace = "/api/series/howimetyourmother";
                this.timing = 5000;

                this.get("/", ()=>{
                    return [
                        {title: "Harry Potter", author: "J. K. Rowling", year: 2001},
                        {title: "Harry Potter 2.", author: "J. K. Rowling", year: 2002},
                        {title: "Harry Potter 3.", author: "J. K. Rowling", year: 2003}
                    ]
                })

            }
        }
    )

    return server
}



export default mockServer