// src/lib/data.js
import animalsData from "@/data/animal.json";

export const getAllAnimals = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(animalsData);
        }, 1000);
    });
};

export const getAnimalById = async (id) => {
    const animals = await getAllAnimals();
    return animals.find(animal => animal.id === parseInt(id));
};
