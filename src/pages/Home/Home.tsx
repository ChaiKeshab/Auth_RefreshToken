import { useEffect, useState } from "react";
import { GetUserRes, getUsersApi } from "../../api/users";

const Home = () => {

  const [users, setUsers] = useState<GetUserRes[] | []>([]);
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    setisLoading(true);
    const fetchUser = async () => {
      try {
        const res = await getUsersApi()
        setUsers(res);
      } catch (error) {
        console.log(error)
      }
      setisLoading(false);
    }
    fetchUser()
  }, [])

  return (
    <div className="">

      <div className="w-full text-center">Welcome to home!</div>


      <section className="users">
        {(isLoading) ? <div>Loading...</div> :
          <>
            <div>
              <h1>Users List</h1>
              {users && users.length > 0 ?
                <ul>
                  {users.map((user, i) => {
                    return <li key={i}>{user.firstname}</li>
                  })}
                </ul>
                : null
              }
            </div>
          </>
        }
      </section>
    </div>
  );
};

export default Home;