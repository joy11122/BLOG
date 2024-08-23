"use client"
import Cardlist from "@/Component/Cardlist";
import Category from "@/Component/Category";
import Hero from "@/Component/Hero";
import Menu from "@/Component/Menu";

import Singlepage from "@/Component/Singlepage";


const Page = () => {
return(<>

<Hero/>
<Category/>
<div className="customflex">
<Cardlist/>
<Menu/>
</div>
  
  </>)

};

export default Page;
