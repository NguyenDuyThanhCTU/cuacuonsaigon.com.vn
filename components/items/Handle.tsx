export const LocalFindById = (
  Data: Array<any>,
  id: "SEOconfig" | "SocialMedia" | "contact" | "information"
) => {
  const RS = Data?.find((item) => item.id === id);
  return RS;
};

export function getHighestNumber(dataArray: Array<any>) {
  if (dataArray.length === 0) {
    return null;
  }

  dataArray.sort((a, b) => b.stt - a.stt);

  return dataArray[0].stt;
}

export const IdCount = (isCart: Array<string>) => {
  const idCount: { [key: string]: number } = {};

  isCart.forEach((id) => {
    idCount[id] = (idCount[id] || 0) + 1;
  });

  return idCount;
};