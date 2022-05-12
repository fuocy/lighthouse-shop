import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "Roboto",
        }}
        className="text-3xl text-red-500"
      >
        Bấm chọn tab Men / Women / ... ở trên nha. Chưa làm landing page.
      </div>
      <div className="hidden">
        <h1 className="text-white">
          7:25a.m 3/3/2022 Thi ra la mot giac mo. Lighthouse duy nhat ma toi co,
          gio la chiec website nay.
        </h1>
        <p className="text-white">
          6:00 9/3/2022 Lai la 1 giac mo dep... em vui ve noi chuyen voi toi
        </p>
      </div>
    </>
  );
};

export default HomePage;
