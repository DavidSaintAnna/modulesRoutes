import express from 'express';
import birthdayRoute from './routes/birthday.js';
import sectorRoute from './routes/sector.js';
import ramalRoute from './routes/ramal.js';



const app = express();
app.use("/birthday", birthdayRoute)
app.use("/sector", sectorRoute)
app.use("/ramal", ramalRoute);

app.listen(8080, () => {
    console.log('eae gleyson');
})