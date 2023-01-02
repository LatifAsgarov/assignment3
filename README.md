# Development Standard to be Used when working on this project.

Movie Listing Website

Team Member: 
- Jigme Tashi Namgyal
- Latif Asgarov
- Nargiz Bayramova

## New Branch

When trying to implement new feature please use new branch.

To create a new branch
Note: Always checkout from the parent branch you want to work on. If your feature is new simply checkout from main.

```
git checkout -b nameOfTheBranch
```

## DO NOT MERGE before approval.
Main branch is our main release branch to be deployed. 

So once your feature is done please send the pull request to the whatsapp group and then after team approval you can merge.

## Theme
- ![#3B8EA5](https://placehold.co/15x15/3B8EA5/3B8EA5.png) `#3B8EA5`
- ![#F5EE9E](https://placehold.co/15x15/F5EE9E/F5EE9E.png) `#F5EE9E`
- ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF`

## Naming conventions

- Using kebab-case for File Names.
example: `movie-listing.jsx`

- Use PascalCase for component names
example: `MovieCard`

- Using camelCase for ClassName
example: `movieCard`


## Set up project in your local computer

- clone the project 
```
git clone https://github.com/LatifAsgarov/assignment3.git
```

- install the dependency
```
npm install
```

- Run the ap in the development
```
npm start
```

Open [http://localhost:3010](http://localhost:3010) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
