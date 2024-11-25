
export const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => (
        <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    ))
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {renderUsers}
            </tbody>
        </table>
    )
}