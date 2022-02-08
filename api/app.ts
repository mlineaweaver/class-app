import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes

const pizzaService = new PizzaService();
app.get('/api/pizzas',(req, res) => {
    const pizzas = pizzaService.getCreatedPizzas();
    res.send({
        msg: 'Found pizzas',
        pizzas,
    });
});

app.get('/api/pizzas/presets'), (req, res) +> {
    const pizzas = pizzaService.getPizzaPresets();

    res.send({
        msg: 'Found pizza presets',
        pizzas,
    });
}

app.listen(4000, () => {
    console.log('Server is running at http://localhost:$(4000)');
});