import Post from './Post'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'
import json from './assets/json.json'

const post = new Post('Webpack post title', WebpackLogo)

console.log('Post to String:', post.toString())

console.log('JSON: ', json)