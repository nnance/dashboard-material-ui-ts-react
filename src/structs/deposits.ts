export interface IDeposits {
  total: number;
  date: Date;
}

export const decodeDeposits = (json: string): IDeposits[] => {
  return JSON.parse(json).map((deposit: any) => {
    return {
      date: new Date(deposit.date),
      total: Number.parseFloat(deposit.total as string),
    };
  });
};
