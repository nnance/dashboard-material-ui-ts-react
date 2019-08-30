import { decodeDeposits } from "../structs/deposits";
import { IOrder } from "../structs/orders";
import { ISale } from "../structs/sales";

export function decode<T>(json: string) {
  return JSON.parse(json) as T;
}

export const getSales = () => getData("/sales").then((json) => decode<ISale[]>(json));
export const getDeposits = () => getData("/deposits").then((json) => decodeDeposits(json));
export const getOrders = ()  => getData("/orders").then((json) => decode<IOrder[]>(json));

export async function callApi<T>(path: string): Promise<T[]> {
    const response = await fetch(path);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export async function getData(path: string): Promise<string> {
  const response = await fetch(path);
  const body = await response.blob();
  const results = await (new Response(body)).text();
  if (response.status !== 200) {
    throw Error(results);
  }
  return results;
}
