import { useState } from "react";

import c from "./Header.module.scss";
import HeadLogo from "./HeadLogo/HeadLogo";
import HeadNav from "./HeadNav/HeadNav";
import HeadAccaount from "./HeadAccaount/HeadAccaount";
import HeadProdList from "./HeadProdList/HeadProdList";
import HeadSearch from "./HeadSearch/HeadSearch";
import HeadContact from "./HeadContact/HeadContact";
import MobileMenu from "./MobileMenu/MobileMenu";
import HeadSearchProvider from "context/HeadSearchContext/HeadSearchContext";
import { usePathEffect } from "hooks/usePathEffect";

function Header() {
  const [mobileMenuState, setMobileMenuState] = useState(false);
 
  usePathEffect(setMobileMenuState,false);

  return (
    <div className={c.component}>
      <HeadLogo />
      <HeadNav
        setMobileMenuState={setMobileMenuState}
        screenState={"default"}
      />

      <HeadAccaount screenState={"default"} />

      <HeadProdList />
      <HeadSearchProvider>
        <HeadSearch />
      </HeadSearchProvider>

      <HeadContact screenState={"default"} />
      {mobileMenuState ? (
        <MobileMenu
          setMobileMenuState={setMobileMenuState}
          mobileMenuState={mobileMenuState}
        />
      ) : null}
    </div>
  );
}

export default Header;
