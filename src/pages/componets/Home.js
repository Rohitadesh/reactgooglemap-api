import { AgCharts } from 'ag-charts-react';
import { useState } from 'react';
const HomeDashboard = () =>{

    const [chartOptions, setChartOptions] = useState({
      
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
      
        series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
    });

    const[pieChart,setPichart]=useState({
         
        data:  [
            { asset: "Stocks", amount: 60000 },
            { asset: "Bonds", amount: 40000 },
            { asset: "Cash", amount: 7000 },
            { asset: "Real Estate", amount: 5000 },
            { asset: "Commodities", amount: 3000 },
          ],
        
      
        series: [{ type: 'pie', angleKey: 'amount', legendItemKey: 'amount' }],
    });

    

    return(
        <>
            <div className=" w-[90%] grid grid-rows-15 flex flex-col gap-12 ">
                <div className="row-span-5 rounded-md flex flex-row justify-center items-center">
                    <div className="w-[70%] flex flex-col justify-center items-center    border rounded-md h-full">
                        <AgCharts  className='w-[90%]' options={chartOptions} />
                    </div>
                    <div className="w-[30%] h-full border"></div>
                </div>
                <div className="row-span-5 rounded-md flex flex-row justify-center items-center">
                    <div className="w-[70%] flex flex-col justify-center items-center    border rounded-md h-full">
                        <AgCharts  className='w-[90%]' options={chartOptions} />
                    </div>
                    <div className="w-[30%] h-full border"></div>
                </div>
                <div className="row-span-5 rounded-md flex flex-row justify-center items-center">
                    <div className="w-[70%] flex flex-col justify-center items-center    border rounded-md h-full">
                        <AgCharts  className='w-[90%]' options={chartOptions} />
                    </div>
                    <div className="w-[30%] h-full border"></div>
                </div>
           
            </div>
        </>
    )
}

export default HomeDashboard