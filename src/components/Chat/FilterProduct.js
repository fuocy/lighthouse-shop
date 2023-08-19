import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import saleOffImg from "assets/saleOff.png";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import React from "react";
import { filterSearchActions } from "src/store/redux-toolkit/filterSearch";
import profile from "assets/profile.jpg";

export default function  FilterProduct() {
  const query = useAppSelector((state) => state.filterSearch.query);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSearchActions.setQuery(e.target.value));
  };


}
