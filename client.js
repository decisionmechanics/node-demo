const BASE_URL = "http://localhost:8080";

const calculateCelcius = async (fahrenheit) => {
  response = await fetch(`${BASE_URL}/${fahrenheit}`);

  return await response.json();
};

(async () => {
  const result = await calculateCelcius(212);

  console.log(`celcius: ${result.celcius}`);
})();
