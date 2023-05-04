import { getList, getName } from "@/services";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [menuTitle, setMEnuTitle] = useState("");
  const [menuList, setmenuList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getName().then((item) => setMEnuTitle(item));
    getList().then((items) => setmenuList(items));
  }, []);
  return (
    <>
      <div>
        <div className="menu">
          <p>{menuTitle}</p>
          <ul className="list">
            {menuList.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  router.push({
                    pathname: "/ItemPage/[id]",
                    query: { id: item.id },
                  });
                }}
                className="items"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
