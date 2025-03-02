"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
const FeedPage = () => {
  const {address, latitude, longitude} = useSelector((state: RootState) => state.address)
  return (
    <div className="">
   
  </div>
  )
}

export default FeedPage