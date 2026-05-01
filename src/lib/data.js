export const getAllAnimals = async () => {
    const res = await fetch("data/animals.json");
    const data = await res.json();
    return data;
}