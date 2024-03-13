1. Make sure you are in the latest version of main
2. Open terminal
3. Make sure you are in the directory CampusCast/campuscast
4. Run 'npm install'
5. Run 'npm run dev'
6. To navigate to the pages, enter in the folder you want to see e.g. to see the register page, you would do localhost:3000/register.

Once you have run 'npm install', you should also now have a folder called node_modules. If you already have this folder, no need to run 'npm install', only run 'npm run dev'

You can ignore everything apart from the 'public' folder and 'app' folder. Public is used to store any images. App contains all the pages for the website. Pages are stored in campuscast/app in their own directories (e.g main, login, register). Each page directory needs a page.js to function and a main.css. Page.js should be simple and contain the calls to components. Each component should be in the page direcotry folder and should have its own css file (e.g reminder.js and reminder.css). Use main as a guide on layout.
