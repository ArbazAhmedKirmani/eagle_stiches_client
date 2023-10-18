import Pagination from "../Pagination";
import Sorting from "../Sorting";

// Define a prop interface
interface CategoryTopFiltersProps {
    sorting: boolean; // You can adjust the type based on your needs
  }

  const CategoryTopFilters: React.FC<CategoryTopFiltersProps> = ({ sorting }) => {
    return (
        <>
            <div className="topfilters mt-5 mb-5">
                <div>
                {sorting ? (
                <Sorting />
                ) : ''}
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        </>
    )
}
export default CategoryTopFilters;