# My Portfolio
This is the repository storing the codes of my portfolio website that shows up something about myself.

## Technologies
---
1) React
2) CSS

## User Guide
---
The website is hosted on <a class="font-weight-bolder" href="https://onghengkiat.herokuapp.com/">here</a>.

## Developer Guide
---
### Testing on localhost by running:

        npm run start

### Deploy to Netlify:

1) Generate the build folder for production

        npm run build

2) On the directory of the **build folder**, create a new file called **_redirects** and add the following contents into that file to make the React Router works

        /*    /index.html  200

3) Deploy to draft URL on Netlify

        netlify deploy

4) Enter the path to **build folder** for the **Publish directory**

5) Deploy to production if everything looks good on the draft URL

        netlify deploy --prod

6) Enter the path to **build folder** for the **Publish directory**

