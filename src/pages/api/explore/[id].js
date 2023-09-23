// import FetchTrefle from ".";

// async function PlantByid(req, res) {
//     const Trefle = await FetchTrefle();
//     const { id } = req.query;
//     const response = await fetch("http://localhost:3000");
//     const result = await response.json();

//     const plant = await result.findById(id);
//     if (!plant) {
//         res.status(404).json({ error: "Plant id not found" });
//     }

//     if (req.method === "GET"){
//         res.status(200).json(plant);
//     } else {
//         res.status(405).json({ error: "Method not supported" });
//     }
// }

// export default PlantByid;