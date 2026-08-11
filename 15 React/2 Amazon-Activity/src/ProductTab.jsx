import { Products } from "./Products"
export function ProductTab() {
    return(
        <div className="ProductTab">
            <Products title="Laptop Asus X3 Pro" idx = '0'/>
            <Products title="Iphone 16 pro Max" idx = '1'/>
            <Products title="Boat eardops cx300" idx = '2'/>
            <Products title="Dell neon 18 intel i7" idx = '3'/>
        </div>
    )
}