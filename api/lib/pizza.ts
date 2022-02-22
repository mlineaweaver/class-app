import { Pizza, PizzaEntity } from "./api-interfaces";
import { idify } from "../utils/idify"
const MEAT_LOVERS = ['bacon', 'pepperoni'];
const VEGGIE_LOVERS = ['basil', 'mushroom', 'olive', 'onion', 'pepper'];
const SUPREME = [...MEAT_LOVERS, ...VEGGIE_LOVERS];

export const PIZZA_PRESETS: Pizza[] = [
    {
        size: 'small',
        toppings: [],
    },
    {
        size: 'medium',
        toppings: [],
    },
    {
        size: 'large',
        toppings: [],
    },
    {
        size: 'x-large',
        toppings: [],
    },
      {
        size: 'small',
        toppings: MEAT_LOVERS,
    },
    {
        size: 'medium',
        toppings: MEAT_LOVERS,
    },
    {
        size: 'large',
        toppings: MEAT_LOVERS,
    },
    {
        size: 'x-large',
        toppings: MEAT_LOVERS,
    },
      {
        size: 'small',
        toppings: VEGGIE_LOVERS,
    },
    {
        size: 'medium',
        toppings: VEGGIE_LOVERS,
    },
    {
        size: 'large',
        toppings: VEGGIE_LOVERS,
    },
    {
        size: 'x-large',
        toppings: VEGGIE_LOVERS,
    },
      {
        size: 'small',
        toppings: SUPREME,
    },
    {
        size: 'medium',
        toppings: SUPREME,
    },
    {
        size: 'large',
        toppings: SUPREME,
    },
    {
        size: 'x-large',
        toppings: SUPREME,
    },
];

export const PIZZAS: PizzaEntity[] = idify<Pizza, PizzaEntity>(PIZZA_PRESETS)