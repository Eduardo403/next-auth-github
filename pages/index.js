import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
function HomePages() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loade = async () => {
      const sesion = await getSession();
      setUser(sesion);
      console.log(sesion);
    };

    loade();
  }, []);
  return <div>Home pages</div>;
}
export default HomePages;
