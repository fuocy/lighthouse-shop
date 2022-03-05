import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";
import classes from "./ClothesSelection.module.css";
import { useEffect, useState } from "react";
import Product from "src/model/Product";
import determineSize from "./SizeAndColor/Size";
import determineColor from "./SizeAndColor/Color";
import { useAppDispatch } from "src/store/hooks";
import { cartActions } from "src/store/cartSlice";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface AppProps {
  singleProduct: Product;
}

////////////////////////////////////////////////////////////
// THIS COMMENT IS IMPORTANCE, DON'T DELETE IT

// bg-[#000] bg-[#fff]
// bg-[#30323C]  bg-[#F4F4E8] bg-[#595E7B]
// bg-[#181A29]

// bg-[#E6B2B8]  bg-[#2D2C2F] bg-[#BFAA80]  bg-[#455851]
// bg-[#7BB4B5]  bg-[#FAC0C3] bg-[#D1C2AD]
// bg-[#E3E2DE]  bg-[#FE37A7] bg-[#2A2A2C]
// bg-[#E9E7E6]
// bg-[#46302C]
// bg-[#121629]  bg-[#B1412C]
// bg-[#272429]  bg-[#3D3D56]
// bg-[#6C1F31]
// bg-[#C1C0C9]  bg-[#D9C8B4]
// bg-[#94815F]  bg-[#406174] bg-[#6A323F]  bg-[#656D6D]
// bg-[#F0C1CB]
// bg-[#F6DFA8]  bg-[#F4F4F4] bg-[#EBEBEB]
// bg-[#C1AA84]
// bg-[#37313C]

// bg-[#E1DED5]

///////////////////////////////////////////////////////////

export default function ClothesSelection({ singleProduct }: AppProps) {
  const [counter, setCounter] = useState(1);
  const [sizeState, setSizeState] = useState<string | undefined>(undefined);
  const [colorState, setColorState] = useState<string | undefined>(undefined);
  const [outOfSize, setOutOfSize] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const incrementHandler = () => {
    setCounter((prevCounter) => prevCounter + 1); // NOT MUTATE STATE
  };

  const decrementHandler = () => {
    setCounter((prevCounter) => (counter > 1 ? prevCounter - 1 : 1));
  };

  const updateSizeHandler = (size: string) => {
    setSizeState(size);
  };

  const updateColorHandler = (color: string) => {
    setColorState(color);
  };

  const addToCartHandler = () => {
    if (!singleProduct.availability) {
      toast.error("Add to basket failed! The product is out of stock for now", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    if (sizeState === outOfSize) {
      toast.error("This size is out of stock for now!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    if (colorState === undefined || sizeState === undefined) {
      toast.error("Please choose a size and a color for your clothes", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    const cartItem = {
      id: router.query.productId as string,
      name: singleProduct.name,
      brand: singleProduct.brand,
      img: singleProduct.image.img1,
      price: +(
        singleProduct.price -
        (singleProduct.price * singleProduct.discount) / 100
      ).toFixed(2),
      quantity: counter,
      totalPrice:
        +(
          singleProduct.price -
          (singleProduct.price * singleProduct.discount) / 100
        ).toFixed(2) * counter,
      color: colorState,
      size: sizeState,
    };
    dispatch(cartActions.addItemToCart(cartItem));

    toast.success("Add to basket succeeded! Check out your cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (singleProduct.status.limited) {
      const outSize =
        singleProduct.size[
          Math.floor(Math.random() * singleProduct.size.length - 1) + 1
        ];

      setOutOfSize(outSize);
    }
  }, [singleProduct]);

  useEffect(() => {
    setSizeState("");
    setColorState("");
  }, [singleProduct]);

  return (
    <>
      <div>
        <ToastContainer />
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Size:&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="font-semibold">{determineSize(sizeState)}</p>
          </div>
          <ul className="flex items-center gap-[5px] text-lg">
            {/* last:crossed
            last:text-[#9ca3af]  */}
            {singleProduct.size.map((size) => (
              <button
                onClick={updateSizeHandler.bind(null, size)}
                className={`uppercase leading-none py-[10px] px-[12px] bg-[#fafafa]  
                ${outOfSize === size && "crossed text-[#9ca3af]"}
                ${sizeState === size ? classes.selectedSize : ""}`}
                key={size}
              >
                {size}
              </button>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Color:</p>
            <p className="font-semibold">{determineColor(colorState)}</p>
          </div>
          <ul className="flex items-center gap-[8px] ">
            {singleProduct.color.map((color) => (
              <button
                onClick={() => updateColorHandler(color)}
                className={`h-6 w-6 bg-[${color}] group flex items-center justify-center`}
                key={color}
              >
                {colorState === color && (
                  <HiCheck className="text-xl text-white" />
                )}
              </button>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5 text-lg">
            <p className="">Qty:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="font-semibold">{counter}</p>
          </div>
          <div className="flex items-center gap-[22px] px-[15px] py-[13px] bg-background-grayfa">
            <button onClick={decrementHandler}>
              <GrFormSubtract className="text-2xl" />
            </button>
            <div>{counter}</div>
            <button onClick={incrementHandler}>
              <GrFormAdd className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-right text-[40px] font-bold mb-[30px] flex items-center gap-4 justify-end">
        {singleProduct.discount > 0 && (
          <p className="text-base text-gray-700 font-thin line-through">
            {singleProduct.price}
          </p>
        )}
        {singleProduct.availability && (
          <p>
            {`$${(
              singleProduct.price -
              (singleProduct.price * singleProduct.discount) / 100
            ).toFixed(2)}
            `}
          </p>
        )}
        {!singleProduct.availability && `Out of stock`}
      </h3>
      <div className="flex gap-5">
        <button className="h-[70px] w-[70px] bg-background-grayfa flex items-center justify-center hover:-translate-y-[2px] transition-all duration-[250ms] rounded-sm active:translate-y-0 active:scale-[.98]">
          <AiOutlineHeart className="h-7 w-7 text-rede7" />
        </button>
        <button
          className="uppercase flex-1 bg-primary-color font-extrabold text-xl shadow-md active:shadow-sm active:scale-[.98] transition-all duration-[250ms] rounded-sm active:translate-y-0 hover:bg-[#fecd48] active:bg-[#e5b32f] hover:-translate-y-[2px] z-10 relative overflow-hidden group"
          onClick={addToCartHandler}
        >
          add to basket
          <div className="-z-10 bg-[#ffffff33] absolute top-[-1000%] bottom-[-375%] w-9 translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"></div>
        </button>
      </div>
    </>
  );
}
