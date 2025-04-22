import {createBrowserRouter, Navigate} from "react-router-dom";
import {routes} from './routes';
import App from "@/App.tsx";
import {News} from "@/pages/news.tsx";
import {AviationAndRailway} from "@/pages/aviationAndRailway.tsx";
import {CitySchedule} from "@/pages/citySchedule.tsx";
import {TrafficConditions} from "@/pages/trafficConditions.tsx";
import {ScooterRental} from "@/pages/scooterRental.tsx";
import {Hotels} from "@/pages/hotels.tsx";
import {VacationHomes} from "@/pages/vacationHomes.tsx";
import {Sanatoriums} from "@/pages/sanatoriums.tsx";
import {CoworkingCenters} from "@/pages/coworkingCenters.tsx";
import {Delivery} from "@/pages/delivery.tsx";
import {GroceryDelivery} from "@/pages/groceryDelivery.tsx";
import {Restaurants} from "@/pages/restaurants.tsx";
import {Tourism} from "@/pages/tourism.tsx";
import {VirtualMuseum} from "@/pages/virtualMuseum.tsx";
import {PlacesToGo} from "@/pages/placesToGo.tsx";
import {Entertainment} from "@/pages/entertainment.tsx";
import {FamilyRest} from "@/pages/familyRest.tsx";
import {PublicServices} from "@/pages/publicServices.tsx";
import {HealthServices} from "@/pages/healthServices.tsx";
import {Education} from "@/pages/education.tsx";
import {ChildrenClasses} from "@/pages/childrenClasses.tsx";
import {AdultCourses} from "@/pages/adultCourses.tsx";
import {MyPathModule} from "@/pages/myPathModule.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to="/news" replace/>,
            },
            {
                path: '/news',
                element: <News/>,
            },
            {
                path: routes.transport.aviationAndRailway,
                element: <AviationAndRailway/>,
            },
            {
                path: routes.region,
                element: <MyPathModule/>,
            },
            {
                path: routes.transport.citySchedule,
                element: <CitySchedule/>,
            },
            {
                path: routes.transport.scooterRental,
                element: <ScooterRental/>,
            },
            {
                path: routes.transport.trafficConditions,
                element: <TrafficConditions/>,
            },
            {
                path: routes.accommodation.hotels,
                element: <Hotels/>,
            },
            {
                path: routes.accommodation.vacationHomes,
                element: <VacationHomes/>,
            },
            {
                path: routes.accommodation.sanatoriums,
                element: <Sanatoriums/>,
            },
            {
                path: routes.accommodation.coworkingCenters,
                element: <CoworkingCenters/>,
            },
            {
                path: routes.food.delivery,
                element: <Delivery/>,
            },
            {
                path: routes.food.groceryDelivery,
                element: <GroceryDelivery/>,
            },
            {
                path: routes.food.restaurants,
                element: <Restaurants/>,
            },
            {
                path: routes.food.stores,
                element: <Restaurants/>,
            },
            {
                path: routes.tourism.routes,
                element: <Tourism/>,
            },
            {
                path: routes.tourism.guides,
                element: <Tourism/>,
            },
            {
                path: routes.tourism.natureReserves,
                element: <Tourism/>,
            },
            {
                path: routes.tourism.virtualMuseum,
                element: <VirtualMuseum/>,
            },
            {
                path: routes.tourism.events,
                element: <PlacesToGo/>,
            },
            {
                path: routes.tourism.placesToGo,
                element: <PlacesToGo/>,
            },
            {
                path: 'familyRest',
                element: <FamilyRest/>,
            },
            {
                path: routes.tourism.childrensEntertainment,
                element: <Entertainment/>,
            },
            {
                path: routes.government.institutions,
                element: <PublicServices/>,
            },
            {
                path: routes.government.post,
                element: <PublicServices/>,
            },
            {
                path: routes.government.banks,
                element: <PublicServices/>,
            },
            {
                path: routes.government.emergencyServices,
                element: <PublicServices/>,
            },
            {
                path: routes.government.police,
                element: <PublicServices/>,
            },
            {
                path: routes.government.utilities,
                element: <PublicServices/>,
            },
            {
                path: routes.government.taxServices,
                element: <PublicServices/>,
            },
            {
                path: routes.government.notariesAndLawyers,
                element: <PublicServices/>,
            },
            {
                path: routes.health.pharmacies,
                element: <HealthServices/>,
            },
            {
                path: routes.health.hospitals,
                element: <div>Больницы и клиники</div>,
            },
            {
                path: routes.health.sports,
                element: <div>Спортивные залы и секции</div>,
            },
            {
                path: routes.health.events,
                element: <div>Спортивные мероприятия</div>,
            },
            {
                path: routes.education.institutions,
                element: <Education/>,
            },
            {
                path: routes.education.childrenClasses,
                element: <ChildrenClasses/>,
            },
            {
                path: routes.education.adultCourses,
                element: <AdultCourses/>,
            },
            {
                path: routes.services.clothingRepair,
                element: <div>Чистка и ремонт одежды</div>,
            },
            {
                path: routes.services.deviceRepair,
                element: <div>Ремонт техники</div>,
            },
            {
                path: routes.services.recycling,
                element: <div>Пункты переработки отходов</div>,
            },
            {
                path: routes.services.waterAndGas,
                element: <div>Доставка воды и газа</div>,
            },
            {
                path: routes.services.classifieds,
                element: <div>Доска объявлений и услуг</div>,
            },
            {
                path: routes.mobile.appDownload,
                element: <div>Приложение для скачивания</div>,
            },
            {
                path: routes.mobile.wifiAccess,
                element: <div>Wi-Fi точки доступа</div>,
            },
            {
                path: routes.mobile.operators,
                element: <div>Мобильные операторы и точки пополнения счета</div>,
            },
        ]
    },

]);

export default router;
