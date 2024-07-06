import Card from "./cards";
import Pagination from "./pagination";
import { useSelector,useDispatch } from "react-redux";
import { setCurrentPage,setPrevPage } from "../redux/paginationSlice";
function CardGrid() {
  
  const allArticles=useSelector((state)=>state.articles.articles);
  const myArticles= useSelector((state)=>state.articles.filteredArticles);
  const loading=useSelector((state)=>state.articles.loading);
  const error = useSelector((state) => state.articles.error); // Assurez-vous que l'état error est défini dans votre slice
  const currentPage=useSelector((state)=>state.pagination.currentPage);
  const dispatch=useDispatch();
  const articlePerPage=3;
  const lastIndex=currentPage*articlePerPage;
  const firstIndex=lastIndex-articlePerPage;
  const FilteredArticles= myArticles.slice(firstIndex,lastIndex);
  const numberOfPage=Math.ceil(allArticles.length/articlePerPage);
  const paginate=(data)=>{
  dispatch(setPrevPage(data));
  dispatch(setCurrentPage(data));
}
  return (
    <>
    {error?<div className="container-grids center-cards-inside">Error in fetching data</div> : 
     
      !loading?<div className="container-grids center-cards-inside">
      <div class="grid md:grid-cols-3 gap-20 ">
        {FilteredArticles && FilteredArticles.map((article) => 
            <Card
              key={article.id}
              id={article.id}
              titre={article.titre}
              description={article.description}
              categorie={article.categorie}
              image={article.image}
            />
        )}
      </div>
    </div>:
    <div className="container-grids center-cards-inside">
      <div class="grid md:grid-cols-3 gap-20 ">
   { [1,2,3].map(()=>

<div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
   
    <span class="sr-only">Loading...</span>
</div>
    )}
</div>
    </div>
    }

    <Pagination
       numberOfPage={numberOfPage}
       paginate={paginate}
       currentPage={currentPage}
    />
    </>
  );
}
export default CardGrid;
