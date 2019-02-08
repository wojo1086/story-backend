import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
require('dotenv').config();

const fs = require('fs');

const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());


app.use('/', router);

router.route('/story')
	.post((req, res) => {
		let data = req.body.story;
		fs.writeFile('stories/story-one.json', data, (err) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	})
	.get((req, res) => {
		fs.readFile('stories/story-one.json', (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		})
	});

app.listen(4000, () => console.log(`Express server running on port 4000`));