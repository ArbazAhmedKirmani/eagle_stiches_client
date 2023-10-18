import HoopSize from "../HoopSize";
import PriceSlider from "../RangeSlider";
import SidebarSearch from "../SidebarSearch/SidebarSearch";

// Define a prop interface
interface CategorySidebarProps {
    priceslider: boolean; // You can adjust the type based on your needs
  }

  const CategorySidebar: React.FC<CategorySidebarProps> = ({ priceslider }) => {
    return(
        <>
        <SidebarSearch />
        <HoopSize />
        {priceslider ? (
        <PriceSlider />
        ) : ''}
        </>
    )
}
export default CategorySidebar;