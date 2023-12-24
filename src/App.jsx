import Header from "./components/header";
import ThreeInfoCard from "./components/threeInfo_card";
import TwoInfoCard from "./components/twoInfo_card";
import user from "./assets/images/2User.png";
import Graph from "./assets/images/Graph.png";
import folder from "./assets/images/Folder.png";
import Marketing from "./components/marketing";
import OrderSection from "./components/orderSection";
import ChartLine from "./components/chartLine";
import ChartHeader from "./components/chartHeader";
import shoppingCart from "./assets/images/fi_shopping-cart.png";
function App() {
  return (
    <div className="w-full h-full bg-[#F4F5FA] max-w-screen-2xl ">
      <Header />
      <main className="grid grid-flow-row-dense grid-cols-6 gap-4 w-full h-full text-center p-5  ">
        {/* 1 */}
        <div className="rounded-lg    col-span-6 md:col-span-3 lg:col-span-2 bg-white  ">
          <TwoInfoCard
            thisWeek
            Icon={Graph}
            firstKey="Sales"
            bgIcon="#D235651F"
            firstValue="0.00"
            firstCurrency="₦"
            firstPercent="0.00"
            secondKey="Volume"
            secondValue="0"
          />
        </div>
        {/* 2 */}
        <div className=" rounded-lg   col-span-6 md:col-span-3 lg:col-span-2 bg-white  ">
          <TwoInfoCard
            thisWeek
            firstKey="Customers"
            bgIcon="#FFCC9129"
            Icon={user}
            firstValue="0"
            firstPercent="0.00"
            secondKey="Active"
            secondValue="0"
            secondPercent="0.00"
          />
        </div>
        {/* 3 */}
        <div className=" rounded-lg   col-span-6 md:col-span-6 lg:col-span-2 bg-white  ">
          <ThreeInfoCard />
        </div>
        {/* 4 */}
        <div className="  rounded-lg   row-span-2 col-span-6 md:col-span-3 lg:col-span-2 p-5 bg-white ">
          <Marketing />
        </div>
        {/* 5 */}
        <div className=" rounded-lg  col-span-6 md:col-span-3 lg:col-span-2   ">
          <TwoInfoCard
            bgCard="#D23565"
            firstKey="All Products"
            bgIcon="#FFFFFF29"
            firstValue="0"
            firstPercent="0.00"
            Icon={folder}
            secondKey="Active"
            secondValue="0"
            secondPercent="0.00"
          />
        </div>
        {/* 6 */}
        <div className=" rounded-lg  row-span-3 col-span-6 md:col-span-6 lg:col-span-2 bg-white  ">
          <OrderSection />
        </div>
        {/* 7 */}
        <div className=" rounded-lg  col-span-6 md:col-span-3 lg:col-span-2 bg-white  ">
          <TwoInfoCard
            thisWeek
            firstKey="Abandoned Cart"
            firstKeyColorWarn
            bgIcon="#FFCC9129"
            Icon={shoppingCart}
            firstValue="0%"
            firstPercent="0.00"
            secondKey="Customers"
            secondValue="0"
          />
        </div>
        {/* 8 */}
        <div className=" rounded-lg min-h-[400px] col-span-6 md:col-span-6 lg:col-span-4 bg-white h-auto  w-auto py-4 ">
          <div className="flex flex-col  gap-9  px-5 w-full  h-[300px]">
            <ChartHeader />
            <ChartLine />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
