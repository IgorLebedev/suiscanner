import { suiNetworkProvider } from "../providers/SuiNetworkProvider";

const fetchPic = (objectId: string | undefined) => {
  if (objectId !== undefined) {
    const pic = suiNetworkProvider.getObject({
      id: objectId,
      options: {
        showContent: true,
        showDisplay: true,
      }
    });
    return pic;
  }
  return; 
};

const fetchSuiObjs = async (wallet: string) => {
  const allObjects =  await suiNetworkProvider.getOwnedObjects({
    owner: wallet,
  });
  const picturesPromise =  allObjects.data.map(({ data }) => fetchPic(data?.objectId));
  const picturesRes = await Promise.all(picturesPromise);
  const onlyPics = picturesRes
    .filter((object) => {
    const allData = object?.data;
    return allData?.display?.data !== null && allData?.display?.data?.hasOwnProperty('image_url');
  })
    .map((object) => {
    const nftData = object?.data?.display;
    if (typeof nftData?.data === 'string' || typeof nftData?.data !== 'object' ) {
      return null;
    }
    return nftData?.data?.image_url;
  });
  return onlyPics;
};

export default fetchSuiObjs