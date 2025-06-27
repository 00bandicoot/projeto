const express = require("express")
const axios = require("axios")
const cors = require("cors")


const app = express();
app.use(cors())
app.get("/api/movie/:id", async (req, res) => {
        const api_read_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2M4MjJiMTNlMzViZTZlYTYxYWIzNzA4YTEyZmRjMSIsIm5iZiI6MTc1MDk5MDI2Ni40OTEwMDAyLCJzdWIiOiI2ODVkZmRiYTBkMWQzMzFhNGM3ZWNjMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.orqybE3KoQuUlu_xM8SAx6l04KFFXy7_KzutWVjNxgk";
        let def_url = `https://api.themoviedb.org/3/movie/${req.params.id}`
        const ax = await axios.get(def_url, {
          headers: {
            Authorization: `Bearer ${api_read_key}`
          }
    })
        res.send(ax.data)
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000...")
})