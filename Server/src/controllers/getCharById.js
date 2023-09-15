const axios = require("axios");

const getCharById = async (req, res) => {
  const URL = "https://rickandmortyapi.com/api/character/";
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}${id}`);

    if (!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);

    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      location: data.location?.name,
      origin: data.origin?.name,
      image: data.image,
      gender: data.gender,
    };
    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
  }
};

module.exports = getCharById;
