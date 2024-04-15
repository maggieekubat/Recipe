
// // {
// // const http = require('node:http');
// // const hostname = '127.0.0.1';
// // const port = 3000;
// // const server = http.createServer((req, res) => {

// //   console.log(req.url)

// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/html');
// //   res.end('<h1>Hello World</h1>');
// //   if (req.url == '/about') {
// //     res.end('About Page');
// //   }
// // });
// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });
// // }

// //{'mushroom_rice': '["mushroom rice", "mushroomrice", "mushroom-rice", ]'};
// //{'gnocchi_bake': '["gnocchi bake", "gnocchibake", "gnocchi-bake", ]'};

// //const reci = [
// //    {'mushroom_rice': 'mushroom rice', 'mushroomrice', 'mushroom-rice',}
// //    {'gnocchi_bake': 'gnocchi bake', 'gnocchibake', 'gnocchi-bake',}
// //]



// // Useful Functions

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

// const recipes = {
//     mushroom_rice: [
//         "mushroom rice",
//         "mushroomrice",
//         "mushroom-rice"
//     ],
//     gnocci_bake : [
//         "gnocchi bake", 
//         "gnocchibake",
//         "gnocchi-bake"
//     ]

// }

// // const recipes = {
// //     "mushroom_rice" : ["mushroom rice", "mushroomrice", "mushroom-rice"],
// //     "gnocci_bake" : ["gnocchi bake", "gnocchibake", "gnocchi-bake"]
// // }

// app.get('/recipe/:slug', (request, response) => {
//     const recipeId = request.params.slug
//     for (const [key, value] of recipes.entries()){
        
//     }
//     if (a) {

//     }
//     else {
//         response.send(`A recipe with the name '${recipeId}' could not be found`)
//     }
    
// })






// getKeyByValue(recipes, mushroom_rice)
  
// for (let [key, value] of Object.entries(recipes)){
//     if ('$[value] == ""')
//         if (recipeId == recipes[mushroom_rice]) {
//             response.render('mushroom_rice.html')
//         }
//     }



// // Make a List here with recipes so that a user can
// // look up mushroom rice without typing the .html

// // Also maybe do another recipe so that its not just a list of one recipe


// recipes[mushroom_rice.html] = ["mushroom rice", "mushroomrice", "mushroom-rice", ]
// recipes[gnocchi_bake.html] = ["gnocchi bake", "gnocchibake", "gnocchi-bake", ]

//<!-- Font Awesome Icons Link -->
//<!--<script src="https://kit.fontawesome.com/25a047c680.js" crossorigin="anonymous"></script> -->