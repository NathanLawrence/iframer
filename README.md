# iframer
Uses JQuery and Tabletop.js to turn a div and script-based embed code into one that uses an iframe for maximum compatibility.

# Setup Instructions
1. Clone this repo.
2. Set up a Google Sheet that closely resembles [this one](https://docs.google.com/spreadsheets/d/183BqQXLnw3ZtqGkB-d-bnFtk5PoPdx7gjmJocCzUeao/edit?usp=sharing). Column A should be labeled "Label" and column B should be labeled "Code".
3. Go to File and choose "Publish to the web..."
4. Choose Link, "Entire Document" and "Web page." as the options. Copy the URL and hit publish.
5. Paste the URL into the `components\iframer-vars.js` file under the variable name sheetURL.
6. Navigate to the project directory in your terminal and install the dev dependencies for this project: `pip install`
7. Prepare the dev version for testing: `gulp compile-dev`
8. Manually upload the files in `builds/development` to your staging server and test as necessary. (See the note about DocumentCloud for why testing must be done server-side. If you aren't using DocumentCloud for your tests, you may be able to complete them locally.)
9. Prepare the production version for deployment: `gulp compile-prod`
10. Manually upload the files in `builds/production` to your production server and do any final tests.

# Daily Use Instructions
1. Copy the embed code.
2. Paste it into the "code" space in a new row of the Google Sheet.
3. Put whatever you want (including nothing) into the "Label" column. It's there for your own internal use.
4. Look to the left and use the row number for your URL. If your row number is 5, for example, and your iframer is deployed to `silly.com/iframer`, then your URL might be `"http://www.silly.com/iframer/index.html?row=5"`.

## A Hint About Google Sheets
By default, Google will assume you're trying to paste into multiple rows if your text has newline characters in it. To avoid this, simply double-click on the cell before pasting.

# A couple notes about DocumentCloud
DocumentCloud's code does not include and explicit "http" at the beginning of their JS imports, so DocumentCloud embeds will only work once you are actually accessing the files from a web server. To test with DocumentCloud before deployment, either fire up a local test stack or upload it to a staging module in S3. The "file://" space will not work.

The folks at Vermont Public Radio were also kind enough to point out to me that Tabletop doesn't seem to take kindly to those new line spaces that DocumentCloud includes in its embed code by default. Luckily, they have a little "remove line breaks" link at the top of the embed wizard that solves this problem. If you notice anything else, feel free to email me at [lawrencen@missouri.edu](mailto:lawrencen@missouri.edu) or [digital@kbia.org](mailto:digital@kbia.org).