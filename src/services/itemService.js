import { itemApiEndPoint, orderApiEndPoint, orderReadApiEndPoint } from './constants'
export async function getItems(searchParam) {
  try{
      const requestURL = `${itemApiEndPoint}?search=${searchParam}`;
      const response = await fetch(requestURL);
      const fetchedData = await response.json();
      return fetchedData.records;
  }catch(error) {
      return [];
  }
}
export async function getOrder(searchParam) {
  try{
      const requestURL = `${orderReadApiEndPoint}?search=${searchParam}`;
      const response = await fetch(requestURL);
      const fetchedData = await response.json();
      return fetchedData.records;
  }catch(error) {
      return [];
  }
}

export async function insertOrder(formData) {
  try{
      const requestURL = `${orderApiEndPoint}`;
      const response = await fetch(requestURL,{ method: "POST",
      mode: 'no-cors',
      body: JSON.stringify(formData)
      });
      const fetchedData = await response.json();
      return fetchedData;
  }catch(error) {
      return [];
  }
}