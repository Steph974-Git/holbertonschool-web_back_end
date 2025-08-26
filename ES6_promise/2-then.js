export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(result => resolve({ status: 200, body: 'Success' }))
      .catch(error => reject(error)) .finally(console.log("Got a response from the API"));
  });
}