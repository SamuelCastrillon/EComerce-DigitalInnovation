"use client";
import { ProductsContext } from "@/helpers/Context/GlobalContext";
import { IProduct } from "@/helpers/interfaces/products.interface";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent, useContext, useEffect, useState } from "react";

const SearchForm: React.FC = () => {
  const router = useRouter();
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const [inputValue, setInputValue] = useState<string>("");
  const [productsSeacrh, setProductsSeacrh] = useState<IProduct[] | null>(null);
  const [currentProductId, setCurrentProductId] = useState<number | null>(null);

  function setValueToState(event: BaseSyntheticEvent) {
    setInputValue(event.target.value);
  }

  function serachSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    router.push(`/shop/product/${currentProductId}`);
  }

  const productsFiltered = (products: IProduct[], filterValue: string): IProduct[] => {
    const valueNormalizate = filterValue.toLowerCase().trim();
    const productsFiltered: IProduct[] = products.filter((product: IProduct) => {
      if (product.name.toLowerCase().includes(valueNormalizate)) {
        return product;
      }
    });
    return productsFiltered;
  };

  useEffect(() => {
    const productsResul = productsFiltered(allProducts, inputValue);
    setProductsSeacrh(productsResul);
    productsResul.length === 1 && setCurrentProductId(productsResul[0].id);
  }, [inputValue]);

  return (
    <form className="flex justify-between pr-1 bg-white rounded w-fit" onSubmit={serachSubmit}>
      <input
        type="text"
        placeholder="Search Product..."
        className="p-1 w-[95%] text-sm rounded border-none text-lime-950 font-bold focus:outline-none focus:ring focus:border-lime-300"
        list="frutas"
        value={inputValue}
        onChange={setValueToState}
      />
      <datalist id="frutas">
        {productsSeacrh?.map((option) => {
          return <option key={option.id} value={option.name}></option>;
        })}
      </datalist>
      <div className="flex items-center w-fit">
        <span className="mb-1 text-xl font-semibold text-lime-600">|</span>
        <button type="submit" className="w-7">
          <MagnifyingGlassCircleIcon className=" text-lime-600 hover:text-lime-950" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
