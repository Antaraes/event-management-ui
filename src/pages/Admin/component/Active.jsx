
const Active = ({status}) => {
    console.log("status: " + status);
    return ( 
        <>
        {
            status=="active" && <div className="w-[15px] h-[15px] bg-green-500 rounded-full">
                
            </div>
        }
        {
            status=="inactive" && <div className="w-[15px] h-[15px] bg-gray-500 rounded-full">
            </div>
        }
        </>
     );
}
 
export default Active;