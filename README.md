# Okoroafor Ozioma Software Engineer portfolio :woman_technologist: :collision:

## A clean, beautiful and responsive portfolio template for myself!


![Screenshot (328)](https://user-images.githubusercontent.com/106816493/200988540-75824923-690d-442a-9347-8169eab690b8.png)

#### You can clone the repository to get your `personal portfolio` . Feel free to use it as-is or customize it as much as you want.


# Components

:zap: `contact`
:zap: `experience`
:zap: `footer`
:zap: `header`
:zap: `intro`
:zap: `portfolio`
:zap: `testimonial`
:zap: `topbar`


# Sections 😇

✔️ Summary about me<br/>
✔️ Skills<br/>
✔️ Resume<br/>
✔️ work experience<br/>
✔️ Big Projects<br/>
✔️ Achievements And Certifications 🏆<br/>
✔️  Contact me<br/>
✔️ Twitter Timeline<br/>
✔️ Github Profile<br/>
✔️ LinkedLn profile<br/>

To view the Live example click <a href="https://ozifirebrand.github.io/portfolio/#home">here</a>

# Project Walk flow  🚀
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
You'll need <a href="https://github.com/">Git</a> and <a href="https://nodejs.org/en/">Node.js</a> (which comes with npm) installed on your computer.

<div class="snippet-clipboard-content notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher"><pre class="notranslate"><code>node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
</code></pre></div>


# How to use the project 🔧

- ` Clone this repository`
- ` Go into the repository`
- ` Install dependencies`
- ` Start's development server`


# Deployment🌟
When you are done with the setup, you should host your website online. We highly recommend to read through the Deploying on Github Pages docs for React.

### 1. Install the `gh-pages` npm package
- `npm install gh-pages --save-dev`

### 2. Add homepage to settings
- Open the `package.json` file in your ide.
- Add a homepage property in this format*: https://{username}.github.io/{repo-name}
```javascript
{
    homepage": "https://ozifirebrand.github.io/portfolio/
 },
```
At this point, the React app's `package.json` file includes a property named `homepage`.

### 3. Add a `predeploy` property and a `deploy` property to the `scripts` object:
 ```javascript
 {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
 }, 
 ````
At this point, the React app's package.json file includes deployment scripts.

### 4. Deploy the React app to GitHub Pages
```npm run deploy```


That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.


# That's it! The React app has been deployed to GitHub Pages! 🚀. At this point, the React app is accessible to anyone who visits the homepage URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.
