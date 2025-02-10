const LocationSearchPanel = (props) => {
    const locations = [
        "24B, Near Kapoor's cafe, Shreyians Coding School, Bhopal",
        "22B, Near Good's cafe, Shreyians Coding School, Bhopal",
        "18B, Near Gupta's cafe, Shreyians Coding School, Bhopal",
        "22Z, Near Cool's cafe, Shreyians Coding School, Bhopal"
    ]

  return (
    <div>
        {
            locations.map(function(elem,idx){
                return(
                    <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className="flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justity-start">
                        <h2 className="bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-fill text-xl"></i></h2>
                        <h4 className="font-medium w-full">{elem}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}
export default LocationSearchPanel