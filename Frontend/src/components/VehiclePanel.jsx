const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
          props.setVehiclePanel(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose your ride</h3>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} 
        className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png"></img>
          <div className="ml-6 w-1/2">
            <h4 className="font-medium text-base">HatchBack <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"></img>
          <div className="ml-3 w-1/2">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motorcycle ride</p>
          </div>
          <h2 className="text-xl font-semibold">₹65.20</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-15" src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"></img>
          <div className="ml-3 w-1/2">
            <h4 className="font-medium text-base">Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹116.78</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-15" src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"></img>
          <div className="-ml-1 w-1/2">
            <h4 className="font-medium text-base">Sedan <span><i className="ri-user-3-fill"></i>5</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹254.20</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }}
        className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"></img>
          <div className="ml-3 w-1/2">
            <h4 className="font-medium text-base">SUV <span><i className="ri-user-3-fill"></i>7</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹264.20</h2>
        </div>
    </div>
  )
}
export default VehiclePanel