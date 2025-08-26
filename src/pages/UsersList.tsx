import { useEffect, useState } from "react"
import { getDummyApi, GetUserRes, getUsersApi } from "../api/users";

const UsersList = () => {
    const [users, setUsers] = useState<GetUserRes[] | []>([]);
    const [dummy, setDummy] = useState<GetUserRes[] | []>([]);
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

    useEffect(() => {
        setisLoading(true);
        const fetchDummy = async () => {
            try {
                const res = await getDummyApi()
                setDummy(res);
            } catch (error) {
                console.log(error)
            }
            setisLoading(false);
        }
        fetchDummy()
    }, [])


    return (
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
                    <div>
                        <h1>Dummy List</h1>
                        {dummy && dummy.length > 0 ?
                            <ul>
                                {dummy.map((user, i) => {
                                    return <li key={i}>{user.firstname}</li>
                                })}
                            </ul>
                            : null
                        }
                    </div>
                </>
            }
        </section>
    )
}
export default UsersList