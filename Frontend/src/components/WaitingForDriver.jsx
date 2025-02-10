const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
          props.setWaitingForDriver(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

        <div className="flex items-center justify-between">
          <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png"></img>
          <div className="text-right text-black">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h2 className="text-lg font-semibold -mt-1 -mb-1">MP04 AB 1234</h2>
            <p className="text-sm text-gray-600">Maruti Suzuki ALto</p>
          </div>
        </div>
        

        <div className="flex gap-2 justify-between flex-col items-center">
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-color-600">Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-color-600">Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">193.20</h3>
                        <p className="text-sm -mt-1 text-color-600">Cash Cash</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default WaitingForDriver