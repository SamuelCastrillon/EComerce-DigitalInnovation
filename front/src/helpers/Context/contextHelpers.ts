export async function checkCartProducts(currentCart) {
  !currentCart.userId &&
    setCurrentCart(localData.getStorage(localData.userProductOrder + currentUserId));
  setAllProducts(await DataToBack.getAllProducts());
}
