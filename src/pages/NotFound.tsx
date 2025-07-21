import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NotFoundPage } from "@/components/sections/not-found";
import SEO from '@/components/ui/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full">
      <SEO 
        title="Страница не найдена"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу гостиничного комплекса Электросталь или воспользуйтесь навигацией сайта."
        keywords="страница не найдена, 404 ошибка, электросталь отель"
        canonical_url="/404"
        no_index={true}
      />
     <NotFoundPage/>
    </div>
  );
};

export default NotFound;
